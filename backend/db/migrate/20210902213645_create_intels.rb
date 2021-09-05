class CreateIntels < ActiveRecord::Migration[5.2]
  def change
    create_table :intels do |i|
      i.string :name
      i.string :comment
      i.integer :job_id
    end
  end
end
