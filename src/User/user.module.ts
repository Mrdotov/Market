import { Module } from '@nestjs/common';
import { UsersModule } from '../auth/auth.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [UsersModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
