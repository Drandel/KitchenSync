import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserResponseDto } from "./dto/user-response.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post("register")
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

  @Get(":id")
  async getUser(@Param("id") id: string): Promise<UserResponseDto> {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException("User not found");
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
