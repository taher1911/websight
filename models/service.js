import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    title: String,
    title_ar: String,
    img: String,
    services: Array,
  },
  { timestamps: true }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;
