import { IUser } from '../interfaces/IUser';

class MyDatabase {
  private static _instance?: MyDatabase;
  private users: IUser[] = [];

  private constructor() {}

  static getInstance() {
    if (!MyDatabase._instance) {
      MyDatabase._instance = new MyDatabase();
    }

    return MyDatabase._instance;
  }

  add(user: IUser) {
    this.users.push(user);
  }

  remove(name: string) {
    const index = this.users.findIndex(n => n.name === name);
    this.users.splice(index, 1);
  }

  list() {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

export const myDatabase = MyDatabase.getInstance();
