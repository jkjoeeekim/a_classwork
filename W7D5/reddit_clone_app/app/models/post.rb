# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  url        :string
#  sub_id     :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  content    :text
#
class Post < ApplicationRecord
  validates :title, presence: true

  belongs_to :sub,
    primary_key: :id,
    foreign_key: :sub_id,
    class_name: :Sub
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
