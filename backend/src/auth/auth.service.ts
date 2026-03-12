import * as crypto from "crypto";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateCredentials(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException("Invalid credentials");

    const valid = await this.userService.verifyPassword(
      password,
      user.password_hash,
    );
    if (!valid) throw new UnauthorizedException("Invalid credentials");

    return user;
  }

  async generateTokens(userId: string, username: string) {
    // Access token — signed JWT, expires in 1 hour
    const payload = { sub: userId, username };
    const accessToken = this.jwtService.sign(payload);

    // Refresh token — random 32-byte hex string (not a JWT)
    const refreshToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30); // 30 days

    await this.prisma.refreshToken.create({
      data: {
        user_id: userId,
        token_hash: tokenHash,
        expires_at: expiresAt,
      },
    });

    return { accessToken, refreshToken };
  }

  async login(email: string, password: string) {
    const user = await this.validateCredentials(email, password);
    const { accessToken, refreshToken } = await this.generateTokens(
      user.id,
      user.username,
    );
    return { accessToken, refreshToken, user };
  }

  async rotateRefreshToken(incomingToken: string) {
    const tokenHash = crypto
      .createHash("sha256")
      .update(incomingToken)
      .digest("hex");

    const stored = await this.prisma.refreshToken.findFirst({
      where: { token_hash: tokenHash },
      include: { user: true },
    });

    if (!stored || stored.expires_at < new Date()) {
      // Delete expired record if it exists
      if (stored) {
        await this.prisma.refreshToken.delete({ where: { id: stored.id } });
      }
      throw new UnauthorizedException("Refresh token invalid or expired");
    }

    // Delete old token before issuing new one (rotation)
    await this.prisma.refreshToken.delete({ where: { id: stored.id } });

    const { accessToken, refreshToken } = await this.generateTokens(
      stored.user.id,
      stored.user.username,
    );

    return { accessToken, refreshToken, user: stored.user };
  }

  async logout(incomingToken: string) {
    const tokenHash = crypto
      .createHash("sha256")
      .update(incomingToken)
      .digest("hex");

    await this.prisma.refreshToken.deleteMany({
      where: { token_hash: tokenHash },
    });
  }
}
