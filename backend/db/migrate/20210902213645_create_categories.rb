class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |i|
      i.string :name
    end
  end
end
