import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
    
  @Get('password-validation/:password')
  getPassTest(@Param('password') password:string){
    return this.userService.passwordValidation(password);
  }

  @Get('hash-password/:password')
  getHashTest(@Param('password') password:string){
    return this.userService.hashPassword(password);
  }

  @Get('hash-verifiedpassword/:password/:hash')
  getVerifiedTest(
    @Param('password') password:string, 
    @Param('hash') hash:string
  ){
    return this.userService.verifyPassword(password, hash);
  }

  // POST just for testing
@Post('verify-password')
verifyPasswordTest(@Body() body: { password: string, hash: string }) {
    console.log('password:', body.password);
    console.log('hash:', body.hash);
    console.log('hash length:', body.hash.length);
  return this.userService.verifyPassword(body.password, body.hash);
}
  
}
