class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :url
      t.string :content
      t.integer :sub_url, null: false
      t.integer :author_url, null: false
      t.timestamps
    end

    add_index :posts, :title
    add_index :posts, :sub_url
    add_index :posts, :author_url
  end
end
