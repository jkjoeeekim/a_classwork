class AddNullFalseConstraintToSubIdColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :post_subs, :post_id
    remove_column :post_subs, :sub_id

    add_column :post_subs, :post_id, :integer, null: false
    add_column :post_subs, :sub_id, :integer,  null: false

    add_index :post_subs, :post_id
    add_index :post_subs, :sub_id

    remove_column :posts, :content

    add_column :posts, :content, :text
  end
end
