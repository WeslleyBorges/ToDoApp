import db from './connection'

export const initDB = () => db.transaction(tx => 
    tx.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT, email TEXT);'),
    (error) => console.log('Houve um erro ao criar a tabela de usuários: ' + error), 
    () => console.log('USERS TABLE IS UP!'))
