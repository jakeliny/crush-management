import * as mongoose from 'mongoose';

class DataBase {

  private DB_CONNECTION;

  constructor() { }

  createConnection() {

    //dentro do heroku meu node_env é production
    if (process.env.NODE_ENV == 'production') {
      mongoose.connect(process.env.MONGODB_URI);
      this.logger(process.env.MONGODB_URI);
    }
    else {
      mongoose.connect(process.env.DB_URI);
      this.logger(process.env.DB_URI);

    }
  }

  logger(uri) {
    this.DB_CONNECTION = mongoose.connection;
    this.DB_CONNECTION.on('connected', () =>
      console.log('Mongoose está conectado ao ' + uri),
    );
    this.DB_CONNECTION.on('error', error =>
      console.error.bind(console, 'Erro na conexão: ' + error),
    );
    this.DB_CONNECTION.on('disconnected', () =>
      console.log('Mongoose está desconectado do ' + uri),
    );
  }

  closeConnection(message, callback) {
    this.DB_CONNECTION.close(() => {
      console.log('Mongoose foi desconectado pelo: ' + message);
      callback();
    });
  }
}

export default DataBase;
