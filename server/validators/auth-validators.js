const { z } = require("zod");

const signupSchema = z.object({
    username: z.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    Fullname: z.string({ required_error: "Fullname is required" })
        .trim()
        .min(3, { message: "Fullname must be at least 3 characters" })
        .max(255, { message: "Fullname must not be more than 255 characters" }),
    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    phone: z.string({ required_error: "Phone is required" })
        .trim()
        .min(7, { message: "Phone no. must be at least 10 characters" })
        .max(20, { message: "Phone no. must not be more than 12 characters" }),
    password: z.string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, "Password can't be greater than 1024 characters"),
    age: z.number({})
        .min(18, { message: "Age must be over 18" })
        .max(1024, "Max age limit"),
    Gender: z.string({ required_error: "Select Your Gender" }),
    height: z.number({ required_error: "Height is required" })
        .min(3, { message: "Height must be over 3" })
        .max(1024, "Max height limit"),
    weight: z.number({ required_error: "Weight is required"})
        .min(30, { message: "Weight is required"})
        .max(300, {message:"Weight is not good to get married"}),
    religion: z.string({ required_error: "Select Your Religion" }),
    caste: z.string({ required_error: "Caste is required" }),
    subcaste: z.string(),
    complexion: z.string({ required_error: "Select Your Complexion" }),
    bloodtype: z.string({ required_error: "Select Your Blood Type" }),
    disabilities: z.string({}),
    disabilityExplain: z.string(),
    annualincome: z.string({ required_error: "Annual Income is required" }),
    assets: z.string({ required_error: "Assets are required" }),
    familymembers: z.string(),
    previousmarriages: z.number({ required_error: "Select the number of previous marriages" }),
    basedIn: z.string({ required_error: "Select where you are based in" }),
})

module.exports = signupSchema;