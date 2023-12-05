import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    title: String,
    title_ar: String,
    description: String,
    description_ar: String,
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
