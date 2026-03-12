import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserResponseDto } from '../dto/user-response.dto';

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

  // stuff from db imp plan

  @Post('register')
  async register(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userService.registerUser(dto);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      createdAt: user.created_at,
    };
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserResponseDto> {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      createdAt: user.created_at,
    };
  }
  
}
