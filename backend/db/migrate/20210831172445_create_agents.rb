class CreateAgents < ActiveRecord::Migration[5.2]
  def change
    create_table :agents do |a|
      a.string :name
      a.string :status
      a.string :info
      a.string :mission
    end
  end
end
