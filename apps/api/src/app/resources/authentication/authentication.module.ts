import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from '../../guards/auth-guard/strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: Number(process.env.JWT_EXPIRES_SECONDS) },
    }),
  ],
  providers: [AuthenticationResolver, AuthenticationService, LocalStrategy],
})
export class AuthenticationModule {}
