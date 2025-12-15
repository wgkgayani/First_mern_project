import mongoose, { Types } from "mongoose";

const orderSchema = mongoose.Schema({
  orderId: {
    Type: String,
    required: true,
    unique: true,
  },
  email: {
    Type: String,
    required: true,
  },
  name: {
    Type: String,
    required: true,
  },
  phone: {
    Type: String,
    required: true,
  },
  address: {
    Type: String,
    required: true,
  },
  status: {
    Type: String,
    required: true,
    default: "pending",
  },
  totle: {
    Type: Number,
    required: true,
  },
  products: [
    {
      productInfo: {
        productId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        altNames: [
          {
            type: String,
          },
        ],
        destription: {
          type: String,
          required: true,
        },
        images: [{ type: String }],
        labelledPrice: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  date: {
    tyoe: Date,
    default: Date.now,
  },
});
