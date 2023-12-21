import mongoose, { Schema, Document } from 'mongoose';

export interface Item {
  data: Date;
  gestor: string;
  colaborador: string;
  cliente: string;
  produto: string;
}

const ItemSchema: Schema = new Schema({
  data: { type: Date, default: Date.now },
  gestor: { type: String, required: true },
  colaborador: { type: String, required: true },
  cliente: { type: String, required: true },
  produto: { type: String, required: true },
});

export const ItemModel = mongoose.model<Item & Document>('Item', ItemSchema);