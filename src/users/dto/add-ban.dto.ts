import { ApiProperty } from '@nestjs/swagger';

export class AddBanDto {
  @ApiProperty({
    example: '5',
    description: 'User ID',
  })
  readonly userId: string;

  @ApiProperty({
    example: 'User get quite low rank',
    description: 'Reason ban',
  })
  readonly banReason: string;
}
