class RemoveColumnUserUrlAndAuthorUrl < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :sub_url, :sub_id
    rename_column :posts, :author_url, :author_id
  end
end
