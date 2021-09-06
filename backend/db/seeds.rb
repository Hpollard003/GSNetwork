require 'faker'
Category.destroy_all
Job.destroy_all

1.times do
    Category.create(name: "Bounty")
    Category.create(name: "CounterIntelligence")
    Category.create(name: "Escort")
end

3.times do
    Job.create(name: "Operation " + Faker::Ancient.god, price: Faker::Number.number(digits: 6), location: Faker::Address.country, desc: "Contact your handler after accepting mission.", category_id: 1)
end