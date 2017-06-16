/**
 * Created by samuellauricella on 6/14/17.
 */
import { User } from '../models/user'
import { Injectable} from '@angular/core'

const usersPromise: Promise<User[]> = Promise.resolve( [
    {
        id:1,
        name:'Sam',
        username:'slauricella',
        avatar:'https://www.iaeste.pl/images/photos/blank-profile-picture.png'
    },
    {
        id:2,
        name:'smidge',
        username:'smidgeysmidge',
        avatar:'https://www.iaeste.pl/images/photos/blank-profile-picture.png'
    },
    {
        id:3,
        name:'stu',
        username:'stupug',
        avatar:'https://www.iaeste.pl/images/photos/blank-profile-picture.png'
    }
])

@Injectable()
export class UserService {

    // get all users
    getUsers() {
        return usersPromise;
    }

    // find a specific user
    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username === username));

        // let user = usersPromise.then(users => {
        //   return users.find(user => {
        //     return user.username === username;
        //   });
        // });

        // return user;
    }

}