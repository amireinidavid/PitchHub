const { default: mongoose } = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: String,
  role: String,
  email: String,
  isPremiumUser: Boolean,
  memberShipType: String,
  memberShipStartDate: String,
  memberShipEndDate: String,
  investorInfo: {
    name: String,
    companyName: String,
    companyRole: String,
    networth: String,
  },
  pitcherInfo: {
    name: String,
    businessName: String,
    businessLocation: String,
    pitcherSalary: String,
    totalExperience: String,
    college: String,
    collegeLocation: String,
    graduatedYear: String,
    linkedinProfile: String,
    resume: String,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

export default Profile;
