class CreateAlphas < ActiveRecord::Migration[6.0]
  def change
    create_table :alphas do |t|
      t.references :bravo, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
