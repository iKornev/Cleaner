import { Schema, model, Types } from 'mongoose';

const ImageSchema = new Schema({
  imageSrc: { type: String, requires: true },
  cleaner: { type: Types.ObjectId, ref: 'Cleaner' }
})

export default model('Image', ImageSchema);