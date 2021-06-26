# == Schema Information
#
# Table name: subs
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :string           not null
#  moderator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Sub < ApplicationRecord
  validates :description, null: false
  validates :moderator_id, uniqueness: { scope: :title }

  belongs_to :moderator,
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :User
  
  has_many :posts,
    primary_key: :id,
    foreign_key: :sub_id,
    class_name: :Post,
    dependent: :destroy
end
