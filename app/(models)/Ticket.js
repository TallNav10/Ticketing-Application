import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env, MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    progress: Number,
    priority: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);
