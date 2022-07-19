import {
  Module,
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto';

@Module({
  providers: [ProductService],
})
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  getProducts() {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post('/create')
  createProduct(@Body() dto: ProductDto) {
    return this.productService.create(dto);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() dto: ProductDto) {
    return this.productService.updateProduct(id, dto);
  }
}
