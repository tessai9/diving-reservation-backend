import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from 'src/entities/shop.entity';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';

@Module({
  controllers: [ShopsController],
  imports: [TypeOrmModule.forFeature([Shop])],
  providers: [ShopsService],
  exports: [ShopsService]
})
export class ShopsModule {}
