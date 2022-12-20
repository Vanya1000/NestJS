import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/roles.model';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RolesModule } from './../roles/roles.module';
import { AuthModule } from './../auth/auth.module';
import { Post } from './../posts/posts.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
