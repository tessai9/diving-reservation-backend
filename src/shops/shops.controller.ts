import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { Shop } from 'src/entities/shop.entity';
import { CreateShopDTO } from './dto/create-shop.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('shops')
export class ShopsController {
  constructor(private readonly service: ShopsService) {}

  @Get()
  async findAll(): Promise<Shop[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Shop> {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() shop: CreateShopDTO): Promise<InsertResult> {
    return await this.service.create(shop);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() shop: CreateShopDTO): Promise<UpdateResult> {
    return await this.service.update(id, shop);
  }

  @Delete(':id')
  async destroy(@Param('id') id: string): Promise<void> {
    return await this.service.remove(id);
  }
}
