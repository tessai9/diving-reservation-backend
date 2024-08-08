import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from 'src/entities/shop.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateShopDTO } from './dto/create-shop.dto';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>
  ) {}

  async findAll(): Promise<Shop[]> {
    return await this.shopRepository.find();
  }

  async findOne(id: string): Promise<Shop | null> {
    return this.shopRepository.findOneBy({ id });
  }

  async create(shop: CreateShopDTO): Promise<InsertResult> {
    return await this.shopRepository.insert(shop);
  }

  async update(id: string, shop: CreateShopDTO): Promise<UpdateResult> {
    return await this.shopRepository.update(id, shop);
  }

  async remove(id: string): Promise<void> {
    await this.shopRepository.delete(id);
  }
}
