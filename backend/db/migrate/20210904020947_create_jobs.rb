class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |j|
      j.string :name
      j.integer :price
      j.string :location
      j.string :desc
      j.integer :category_id
    end
  end
end
