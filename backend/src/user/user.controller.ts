import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
    
    @Get('passtest/:password')
    getPassTest(@Param('password') password:string){
      return this.userService.passwordValidation(password);
  }
}
