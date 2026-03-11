import Db from '@/creational/singleton/db/db'


const dbClassic = Db.getInstance()

console.log(dbClassic)

dbClassic.addUser({name: 'Danilo', 'age': 34})
dbClassic.addUser({name: 'Maria', 'age': 23})
dbClassic.addUser({name: 'João', 'age': 42})
dbClassic.removeUser(1)
dbClassic.showUsers()