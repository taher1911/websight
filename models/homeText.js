import mongoose, { Schema } from "mongoose";

const homeTextSchema = new Schema(
  {
    mainTitle: String,
    mainTitleAr: String,
    mainDescription: String,
    mainDescriptionAr: String,
    mainTitle1: String,
    mainTitle1Ar: String,
    mainTitle2: String,
    mainTitle2Ar: String,
    mainTitle3: String,
    mainTitle3Ar: String,
    brandTitle: String,
    brandTitleAr: String,
    achievementTitle: String,
    achievementTitleAr: String,
    serviceTitle: String,
    serviceTitleAr: String,
    serviceDescription: String,
    serviceDescriptionAr: String,
    projectsTitle: String,
    projectsTitleAr: String,
  },
  { timestamps: true }
);

const HomeText =
  mongoose.models.HomeText || mongoose.model("HomeText", homeTextSchema);
export default HomeText;
