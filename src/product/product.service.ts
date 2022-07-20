import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/interface.produc';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  private async findProduct(id: string) {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }

  async getAllProduct() {
    return this.productModel.find().exec();
  }

  async create(productDto) {
    const createProduct = new this.productModel(productDto);
    delete createProduct._id;
    return createProduct.save();
  }

  async getProductById(id) {
    const product = await this.findProduct(id);
    if (product) return product;
  }

  async getProductByCategory(category) {
    let products;
    try {
      products = await this.productModel.find({ category }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!products) {
      throw new NotFoundException('Could not find product.');
    }
    return products;
  }

  async updateProduct(id, productDto) {
    const product = await this.findProduct(id);
    if (product)
      return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }

  async removeProduct(id) {
    const product = await this.findProduct(id);
    if (product) return this.productModel.findByIdAndRemove(id);
  }
}
