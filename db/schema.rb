# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_02_010225) do

  create_table "alphas", force: :cascade do |t|
    t.integer "bravo_id", null: false
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bravo_id"], name: "index_alphas_on_bravo_id"
  end

  create_table "bravos", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "charlis", force: :cascade do |t|
    t.integer "tango_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tango_id"], name: "index_charlis_on_tango_id"
  end

  create_table "tangos", force: :cascade do |t|
    t.integer "alpha_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["alpha_id"], name: "index_tangos_on_alpha_id"
  end

  add_foreign_key "alphas", "bravos"
  add_foreign_key "charlis", "tangos"
  add_foreign_key "tangos", "alphas"
end
