class CreateTangos < ActiveRecord::Migration[6.0]
  def change
    create_table :tangos do |t|
      t.references :alpha, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone

      t.timestamps
    end
  end
end
