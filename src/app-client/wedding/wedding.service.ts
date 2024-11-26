import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';
import { Wedding } from 'src/database/entities/wedding.entity';
import { Users } from 'src/database/entities/user.entity';
import { UsersService } from '../user/user.service';

@Injectable()
export class WeddingService {
  constructor(
    @InjectRepository(Wedding)
    private readonly weddingRepository: Repository<Wedding>,
    private readonly userService: UsersService,
  ) {}

  async create(user: Users, payload: CreateWeddingDto): Promise<Wedding> {
    console.log(payload);
    console.log(user);
    const userData = await this.userService.findOne(user.id);
    const wedding = this.weddingRepository.create({
      ...payload,
      user: userData,
    });
    console.log(wedding);
    // return wedding;
    return this.weddingRepository.save(wedding);
  }

  async findAll(): Promise<Wedding[]> {
    return this.weddingRepository.find();
  }

  async findOne(id: number): Promise<Wedding> {
    const wedding = await this.weddingRepository.findOne({ where: { id } });
    if (!wedding) {
      throw new NotFoundException(`Wedding with ID ${id} not found`);
    }
    return wedding;
  }

  async findOneByPath(payload: string): Promise<Wedding> {
    const wedding = await this.weddingRepository.findOne({
      where: { pathName: payload },
    });
    if (!wedding) {
      throw new NotFoundException(`Wedding with path ${payload} not found`);
    }
    return wedding;
  }

  async update(
    id: number,
    updateWeddingDto: UpdateWeddingDto,
  ): Promise<Wedding> {
    const wedding = await this.findOne(id);
    Object.assign(wedding, updateWeddingDto);
    return this.weddingRepository.save(wedding);
  }

  async remove(id: number): Promise<void> {
    const wedding = await this.findOne(id);
    await this.weddingRepository.remove(wedding);
  }
}
