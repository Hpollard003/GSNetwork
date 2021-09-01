class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |i|
      i.string :name
      i.integer :price
      i.string :status
    end
  end
end
