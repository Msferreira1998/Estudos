// Singleton - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`connectado: ${this.host}`, this.user);
  }

  static getDatabase(host: string, user: string, password: string) {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    console.log('Nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();
