import { NewUser } from "./customer.type";
import {faker} from '@faker-js/faker'

export function newUserData():NewUser{
    return{
    title:'Mrs.',
    firstName:faker.person.firstName(),
    lastName:faker.person.lastName(),
    password:faker.internet.password(),
    month:'3',
    day:'8',
    year:'1999', 
    email:faker.internet.email()
    }

}