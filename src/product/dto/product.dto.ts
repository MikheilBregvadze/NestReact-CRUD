import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  price: number;

  @IsBoolean()
  sale: boolean;

  @IsNotEmpty()
  qty: number;
}
