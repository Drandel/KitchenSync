
export class CreateUserDto {
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  password!: string; // plain-text; will be hashed in service
}