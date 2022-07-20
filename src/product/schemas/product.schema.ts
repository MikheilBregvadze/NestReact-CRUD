import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sale: { type: Boolean, required: true },
  qty: { type: Number, required: true },
});

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  sale: boolean;
  price: number;
  qty: number;
}
