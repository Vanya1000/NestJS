import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'Post title',
    description: 'Post title',
  })
  readonly title: string;
  @ApiProperty({ example: 'Post content', description: 'Post content' })
  readonly content: string;
  @ApiProperty({ example: '4', description: 'userId' })
  readonly userId: number; // the best way to do this is to use the user's token
  @ApiProperty({ example: 'cat.jpg', description: 'image' })
  readonly image: string;
}
