import {checkUserExists} from '../database/queries'

export default class AuthService {
    static login (username: string, password: string) {
        return new Promise<void>((resolve, reject) => {
            const userExists = checkUserExists(username, password)

            if (userExists) resolve()
            
            reject()
        })
    }
}