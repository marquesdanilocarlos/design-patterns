import Db from '@/creational/singleton/db/db'
import './first-module'

const dbClassic = Db.getInstance()

console.log(dbClassic)

dbClassic.addUser({name: 'Carlos', 'age': 34})
dbClassic.addUser({name: 'Samara', 'age': 23})
dbClassic.addUser({name: 'Dora', 'age': 42})
dbClassic.removeUser(1)
dbClassic.showUsers()