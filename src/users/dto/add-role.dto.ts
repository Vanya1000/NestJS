import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Role value',
  })
  readonly value: string;

  @ApiProperty({ example: '4', description: 'User ID' })
  readonly userId: number;
}
