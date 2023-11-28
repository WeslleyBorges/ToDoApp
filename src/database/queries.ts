import db from './connection'

export const checkUserExists = (email: string, password: string) => {
    let userExists = false

    db.transaction(tx => tx.executeSql('SELECT 1 FROM user WHERE email = ? AND password = ?;', 
        [email, password], (_, {rows}) => userExists = !!rows.length))

    return userExists
} 
