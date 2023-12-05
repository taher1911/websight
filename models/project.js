import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    tags: Array,
    date: String,
    link: String,
    cover: String,
    images: Array,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
