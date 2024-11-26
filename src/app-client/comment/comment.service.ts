import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/database/entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async create(payload: CreateCommentDto): Promise<Comment> {
    console.log(payload);
    const comment = this.commentRepository.create({
      ...payload,
      replies: payload.replies || [],
    });
    return await this.commentRepository.save(comment);
  }

  async replies(id: number, payload: UpdateCommentDto) {
    const parent = await this.commentRepository.findOneBy({ id });
    if (!parent) {
      throw new NotFoundException('Parent comment not found');
    }
    const currentReplies = parent.replies ? parent.replies : [];
    const updateReplies = [
      ...currentReplies,
      { ...payload, createdAt: new Date() },
    ];
    console.log(updateReplies);
    return await this.commentRepository.update(id, { replies: updateReplies });
  }

  async findAll() {
    return await this.commentRepository.find();
  }

  async findByWedding(payload: string) {
    return await this.commentRepository.findBy({
      wedding: { pathName: payload },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  // update(id: number, updateCommentDto: UpdateCommentDto) {
  //   return `This action updates a #${id} comment`;
  // }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
