import {User} from './user.type.ts'
export function getUserData():User{
    return{
        email:process.env.EMAIL,
        password:process.env.PASSWORD
    }
}