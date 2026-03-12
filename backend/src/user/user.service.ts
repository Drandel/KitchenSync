import {
  BadRequestException,
  ConflictException,
  Injectable,
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { CreateUserDto } from "../dto/create-user.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  async passwordValidation(password: string) {
    // Password Pattern: lowercase, UPPERCASE, digit, min length 8
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passPattern.test(password);
  }

  async hashPassword(password: string) {
    // Salt password 10 times and return hash result
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async verifyPassword(password: string, hash: string) {
    // Compare password with hashed password, return true/false
    return await bcrypt.compare(password, hash);
  }

  // stuff from db imp plan

  constructor(private readonly prisma: PrismaService) {}

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async registerUser(dto: CreateUserDto) {
    // Check email uniqueness
    const emailTaken = await this.findByEmail(dto.email);
    if (emailTaken) throw new ConflictException("Email already in use");

    // Check username uniqueness
    const usernameTaken = await this.findByUsername(dto.username);
    if (usernameTaken) throw new ConflictException("Username already taken");

    // Validate password shape
    const validPassword = this.passwordValidation(dto.password);
    if (!validPassword)
      throw new BadRequestException("Password does not meet requirements");

    // Hash password
    const password_hash = await this.hashPassword(dto.password);

    // Create user in DB
    const user = await this.prisma.user.create({
      data: {
        first_name: dto.firstName,
        last_name: dto.lastName,
        username: dto.username,
        email: dto.email,
        password_hash,
      },
    });

    return user;
  }
}
