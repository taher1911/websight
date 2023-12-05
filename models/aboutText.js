import mongoose, { Schema } from "mongoose";

const aboutTextSchema = new Schema(
  {
    mainTitle: String,
    mainTitleAr: String,
    mainDescription: String,
    mainDescriptionAr: String,
    processTitle: String,
    processTitleAr: String,
    process: Array,
  },
  { timestamps: true }
);

const AboutText =
  mongoose.models.AboutText || mongoose.model("AboutText", aboutTextSchema);
export default AboutText;
