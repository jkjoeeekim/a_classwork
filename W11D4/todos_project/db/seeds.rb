# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# const initialState = {
#     1: {
#         id: 1,
#         title: "buy soap",
#         todo_id: 1,
#         done: false
#     },
#     2: {
#         id: 2,
#         title: "buy soap2",
#         todo_id: 1,
#         done: false
#     },
#     3: {
#         id: 3,
#         title: "buy soap3",
#         todo_id: 2,
#         done: false
#     },
#     4: {
#         id: 4,
#         title: "make him happy",
#         todo_id: 2,
#         done: true
#     }
# };
todo1 = Todo.create!(title: "wash car1", body: "with soap1", done: false)
todo2 = Todo.create!(title: "wash car2", body: "with soap2", done: false)
todo3 = Todo.create!(title: "wash car3", body: "with soap3", done: false)
todo4 = Todo.create!(title: "wash car4", body: "with soap4", done: false)