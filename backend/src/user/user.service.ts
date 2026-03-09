import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UserService {
    async passwordValidation(password:string) {
        // Password Pattern: lowercase, UPPERCASE, digit, min length 8
        // Do we want special characters aswell? 
        // (?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passPattern.test(password);
    }

    async hashPassword(password:string) {
        // Salt password 10 times and return hash result
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async verifyPassword(password:string, hash:string) {
        // Compare password with hashed password, return true/false
        return await bcrypt.compare(password, hash);

    }


    // Functions that need to be completed and potentially relocated
    
    async verifyUsername(username:string){
        // Check username against DB to see if user already exists
        // may be redundant but could be used during login or duing createUser()
    }

    async createUser(){
        // if username in users:
        //     notify that username already exists
        // while true:
        //     newPass = user input for password
        //     isValid = validatePassword(newPass)
        //     if isValid:
        //         break
        //     else:
        //         notify user of invalid  password
        
        // create new user object for db storage
        // newUser = User(new_username, hash_password(new_password), "user")

        // save new user object to database
        // saveUser(newUser)

    }

    async saveUser(){
        // save new user to database
        // for username, data in user_data.items():
        //     save_user(username, data['password'], data['role'])
    }
    
}
