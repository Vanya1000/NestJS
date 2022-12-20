import {
  Controller,
  Body,
  UploadedFile,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostModel } from './posts.model';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 201, type: PostModel })
  @UseInterceptors(FileInterceptor('image')) // add interceptor for image field
  @Post()
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.createPost(dto, image);
  }
}
