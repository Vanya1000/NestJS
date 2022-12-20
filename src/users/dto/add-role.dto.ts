import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Role value',
  })
  @IsString({ message: 'Must be a string' })
  readonly value: string;

  @ApiProperty({ example: '4', description: 'User ID' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;
}
