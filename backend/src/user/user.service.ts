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
        return await bcrypt.hash(password, 10);
    }

    async verifyPassword(password:string, hash:string) {
        // Compare password with hashed password, return true/false
        return await bcrypt.compare(password, hash);
    }
    
}
