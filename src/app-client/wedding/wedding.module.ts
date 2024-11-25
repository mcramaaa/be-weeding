import { Module } from '@nestjs/common';
import { WeddingService } from './wedding.service';
import { WeddingController } from './wedding.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wedding } from 'src/database/entities/wedding.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wedding])],
  controllers: [WeddingController],
  providers: [WeddingService],
})
export class WeddingModule {}
