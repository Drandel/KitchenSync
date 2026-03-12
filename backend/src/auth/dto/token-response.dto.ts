import { UserResponseDto } from "../../user/dto/user-response.dto";

export class TokenResponseDto {
  accessToken!: string;
  user!: UserResponseDto;
}
