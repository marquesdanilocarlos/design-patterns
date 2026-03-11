type User = {
    name: string
    age: number
}

export default class Db {
    private static _instance: Db | null = null
    private readonly users: User[] = []

    private constructor() {
    }

    public static getInstance(): Db {
        if (Db._instance === null) {
            Db._instance = new Db()
            return Db._instance
        }

        return Db._instance
    }

    addUser(user: User):void {
        this.users.push(user)
    }

    removeUser (index: number): void {
        this.users.splice(index, 1)
    }

    showUsers(): void {
        for (const user of this.users) {
            console.log(user)
        }
    }
}


