const Preference = require("../models/preference-model");

const setPreferences = async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      lowerAge, upperAge, Gender, lowerHeight, upperHeight,
      lowerWeight, upperWeight, religion, caste, complexion,
      bloodtype, lowerAnnualIncome, upperAnnualIncome, previousMarriages, theirCity
    } = req.body;

    // Check if preferences already exist, if yes, update them, else create new preferences
    let preferences = await Preference.findOne({ userId });

    if (!preferences) {
      preferences = new Preference({ userId });
    }

    preferences.lowerAge = lowerAge;
    preferences.upperAge = upperAge;
    preferences.Gender = Gender;
    preferences.lowerHeight = lowerHeight;
    preferences.upperHeight = upperHeight;
    preferences.lowerWeight = lowerWeight;
    preferences.upperWeight = upperWeight;
    preferences.religion = religion;
    preferences.caste = caste;
    preferences.complexion = complexion;
    preferences.bloodtype = bloodtype;
    preferences.lowerAnnualIncome = lowerAnnualIncome;
    preferences.upperAnnualIncome = upperAnnualIncome;
    preferences.previousMarriages = previousMarriages;
    preferences.theirCity = theirCity;

    await preferences.save();

    res.status(200).json({ message: "Preferences updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { setPreferences };
