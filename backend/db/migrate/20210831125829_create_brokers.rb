class CreateBrokers < ActiveRecord::Migration[5.2]
  def change
    create_table :brokers do |b|
      b.string :name
      b.integer :rating
      b.integer :broker_id
    end
  end
end
