import { ApiProperty } from '@nestjs/swagger';
import { isNumber } from 'util';

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
