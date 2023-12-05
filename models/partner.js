import mongoose, { Schema } from "mongoose";

const partnerSchema = new Schema(
  {
    image: String,
  },
  { timestamps: true }
);

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);
export default Partner;
