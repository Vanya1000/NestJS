import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './../users/user.model';

interface PostsCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostsCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Who eated my cake?',
    description: 'Title',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'Who eated my cake?',
    description: 'Title',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @ApiProperty({
    example: 'cat.jpg',
    description: 'image',
  })
  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
