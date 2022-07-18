import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from './interfaces/interface.produc';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getAllProduct() {
    return this.productModel.find().exec();
  }

  async create(productDto) {
    const createProduct = new this.productModel(productDto);
    return createProduct.save();
  }

  async getProductById(id) {
    const product = this.productModel.findOne({ _id: id });
    if (product) {
      return product;
    } else {
      throw new ForbiddenException('Credentials incorrect');
    }
  }

  async updateProduct(id, productDto) {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
