import mongoose from "mongoose";

const PitchSchema = new mongoose.Schema({
  businessName: String,
  location: String,
  type: String,
  pitch: String,
  pitcherId: String,
  investors: [
    {
      name: String,
      email: String,
      userId: String,
      status: String,
    },
  ],
});

const Pitch = mongoose.models.Pitch || mongoose.model("Pitch", PitchSchema);
export default Pitch;
