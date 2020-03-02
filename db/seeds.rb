# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
puts "---"*25
puts "---------- Deleteing all records from all tables before seed data.. ---------- ..\n"
# ['Bravo','Alpha', 'Tango', 'Charli'].each {|tab| tab.delete_all }
Charli.delete_all
Tango.delete_all
Alpha.delete_all
Bravo.delete_all
puts "---------- Deleteing all records from all tables before seed data .. ---------- ..\n"

# Seed basic data
puts "======== Creating few records for Bravo ======== ..\n"
b1 = Bravo.create(name: 'b_one')
b2 = Bravo.create(name: 'b_two')

puts "======== Creating few records for Alpha ======== ..\n"
a1 = Alpha.create(name: 'a_one', bravo_id: b1.id)
a2 = Alpha.create(name: 'a_two', bravo_id: b1.id)
a3 = Alpha.create(name: 'a_three', bravo_id: b1.id)
a4 = Alpha.create(name: 'a_four', bravo_id: b1.id)

puts "======== Creating few records for Tango ======== ..\n"
t1 = Tango.create(first_name: 't.one_first', last_name: 't.one_last', \
									email: 't.one@email.com',	phone: '123456', alpha_id: a1.id)

t2 = Tango.create(first_name: 't.two_first', last_name: 't.two_last',	\
									email: 't.two@email.com',	phone: '123456', alpha_id: a2.id)

t3 = Tango.create(first_name: 't.three_first', last_name: 't.three_last', \
									email: 't.three@email.com',	phone: '123456', alpha_id: a3.id)

t4 = Tango.create(first_name: 't.four_first', last_name: 't.four_last',\
									email: 't.four@email.com',	phone: '123456', alpha_id: a4.id)

puts "======== Creating few records for Charli ======== ..\n"
c1 = Charli.create(first_name: 'c.one_first', last_name: 'c.one_last',\
									email: 'c.one@email.com',	phone: '123456', tango_id: t1.id)

c2 = Charli.create(first_name: 'c.two_first', last_name: 'c.two_last',\
									email: 'c.two@email.com',	phone: '123456', tango_id: t2.id)
puts "---"*25
puts "Successfuly created Bravo's #{Bravo.count}, Alpha's #{Alpha.count}, Tango's #{Tango.count} & Charli's #{Charli.count} records!!"
puts "---"*25
# t3 = Charli.create(first_name: 't.three_first', last_name: 't.three_last',
# 									email: 't.three@email.com',	phone: '123456', alpha_id: a3.id)

# t4 = Charli.create(first_name: 't.four_first', last_name: 't.four_last',
# 									email: 't.four@email.com',	phone: '123456', alpha_id: a4.id)






