import { Schema, model, Types } from 'mongoose';

const CleanerSchema = new Schema({
  name: { type: String, requires: true },
  description: { type: String, requires: true },
  services: [{ type: Types.ObjectId, ref: 'Service' }],
  avatarSrc: { type: String, default: '' },
  images: [{ type: Types.ObjectId, ref: 'Image' }],
})

export default model('Cleaner', CleanerSchema);