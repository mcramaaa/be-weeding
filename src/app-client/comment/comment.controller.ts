import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comment')
@Controller({
  path: 'comment',
  version: '1',
})
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }
  @Patch('replies/:parentId')
  @HttpCode(HttpStatus.OK)
  replies(
    @Param('parentId') parentId: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.replies(parentId, updateCommentDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':weedingPath')
  @HttpCode(HttpStatus.OK)
  findByWedding(@Param('weddingPath') weddingPath: string) {
    return this.commentService.findByWedding(weddingPath);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  // @Patch(':id')
  // @HttpCode(HttpStatus.OK)
  // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
  //   return this.commentService.update(+id, updateCommentDto);
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
