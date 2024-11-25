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
import { ApiTags } from '@nestjs/swagger';
import { WeddingService } from './wedding.service';
import { CreateWeddingDto } from './dto/create-wedding.dto';
import { UpdateWeddingDto } from './dto/update-wedding.dto';

@ApiTags('weddings')
@Controller({
  path: 'wedding',
  version: '1',
})
export class WeddingController {
  constructor(private readonly weddingService: WeddingService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() payload: CreateWeddingDto) {
    return this.weddingService.create(payload);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.weddingService.findAll();
  }

  @Get(':path')
  @HttpCode(HttpStatus.OK)
  findByPath(@Param('path') id: string) {
    return this.weddingService.findOneByPath(id);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.weddingService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
    return this.weddingService.update(+id, updateWeddingDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.weddingService.remove(+id);
  }
}
