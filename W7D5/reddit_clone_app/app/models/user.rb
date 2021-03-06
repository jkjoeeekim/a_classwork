# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :subs,
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :Sub,
    dependent: :destroy

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    # return nil if user.nil?
    (user && user.is_password?(password)) ? user : nil
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
