import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
    itemId: { type: mongoose.Types.ObjectId, ref: 'Item' },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

const Item = mongoose.model('Item', ItemSchema);
export default Item;