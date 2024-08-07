import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShopDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
