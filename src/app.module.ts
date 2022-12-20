import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [User, Role, UserRoles, Post],
      autoLoadModels: true, // auto create tables according to models
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
