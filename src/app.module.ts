import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://Misho123:Misho123@cluster0.ixt7b.mongodb.net/nestjs?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
