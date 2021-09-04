require 'faker'
Intel.destroy_all
Job.destroy_all

5.times do
    Intel.create(name: "Agent " + Faker::Ancient.god, comment: Faker::Lorem.paragraph , job_id: 1)
end

5.times do
    Job.create(name: "Capture " + Faker::Name.name, price: Faker::Number.number(digits: 9), location: Faker::Address.country, desc: "Dead or Alive")
end