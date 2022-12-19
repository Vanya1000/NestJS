import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Roles } from './../auth/roles-auth.decorator';
import { RolesGuard } from './../auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { AddBanDto } from './dto/add-ban.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @ApiResponse({
    status: 401,
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid token',
      },
    },
  })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Add role' })
  @ApiResponse({ status: 201, schema: { example: { token: 'string' } } })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Add user to ban' })
  @ApiResponse({ status: 201, schema: { example: { token: 'string' } } })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  addBan(@Body() dto: AddBanDto) {
    return this.usersService.addBan(dto);
  }
}
