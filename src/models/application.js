import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  pitcherUserID: String,
  name: String,
  email: String,
  investorUserID: String,
  status: Array,
  pitchID: String,
  pitchAppliedDate: String,
});

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);

export default Application;
