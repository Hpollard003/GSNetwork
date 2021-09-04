# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_02_213645) do

  create_table "brokers", force: :cascade do |t|
    t.string "name"
    t.integer "rating"
    t.integer "job_id"
  end

  create_table "info", force: :cascade do |t|
    t.string "name"
    t.string "comment"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "status"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "location"
    t.string "desc"
    t.integer "broker_id"
  end

end
