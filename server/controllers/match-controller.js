const User = require("../models/user-model");
const Preference = require("../models/preference-model");

const getMatches = async (req, res) => {
  try {
    const userId = req.user.userId;
    const preferences = await Preference.findOne({ userId });

    if (!preferences) {
      return res.status(400).json({ message: "User preferences not found" });
    }

    const {
      lowerAge, upperAge, Gender, lowerHeight, upperHeight,
      lowerWeight, upperWeight, religion, caste, complexion,
      bloodtype, lowerAnnualIncome, upperAnnualIncome, previousMarriages, theirCity
    } = preferences;

    const matchedUsers = await User.find({
      age: { $gte: lowerAge, $lte: upperAge },
      Gender,
      height: { $gte: lowerHeight, $lte: upperHeight },
      weight: { $gte: lowerWeight, $lte: upperWeight },
      religion,
      caste,
      complexion,
      bloodtype,
      annualincome: { $gte: lowerAnnualIncome, $lte: upperAnnualIncome },
      previousmarriages: previousMarriages,
      basedIn: theirCity
    });

    res.status(200).json(matchedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getMatches };
