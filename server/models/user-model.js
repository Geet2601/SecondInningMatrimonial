const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    Fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    caste: {
        type: String,
        required: true,
    },
    subcaste: {
        type: String,
    },
    complexion: {
        type: String,
        required: true,
    },
    bloodtype: {
        type: String,
        required: true,
    },
    disabilities: {
        type: String,
        // required: true,
    },
    disabilityExplain: {
        type: String,
    },
    annualincome: {
        type: String,
        required: true,
    },
    assets: {
        type: String,
        required: true,
    },
    familymembers: {
        type: String,
    },
    previousmarriages: {
        type: Number,
        // required: true,
    },
    basedIn: {
        type: String,
        // required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        });
    } catch (error) {
        console.error(error);
    }
};

const User = mongoose.model("User", userSchema);

module.exports = User;


// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { required } = require("../validators/auth-validators");

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//     },
//     Fullname: {
//         type:String,
//         required:true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     // Fullname: {
//     //     type: String,
//     //     required: true,
//     // },
//     // age: {
//     //     type: Number,
//     //     required: true,
//     // },
//     // religion: {
//     //     type: String,
//     //     required: true,
//     // },
//     // Gender: {
//     //     type: String,
//     //     required: true,
//     // },
//     // height: {
//     //     type: Number,
//     //     required: true,
//     // },
//     // weight: {
//     //     type: Number,
//     //     required: true,
//     // },
//     // caste: {
//     //     type: String,
//     //     required: true,
//     // },
//     // subcaste: {
//     //     type: String,
//     // },
//     // complexion: {
//     //     type: String,
//     //     required: true,
//     // },
//     // bloodtype: {
//     //     type: String,
//     //     required: true,
//     // },
//     // disabilities: {
//     //     type: String,
//     //     required: true,
//     // },
//     // disabilityExplain: {
//     //     type: String,
//     // },
//     // annualincome: {
//     //     type: String,
//     //     required: true,
//     // },
//     // assets: {
//     //     type: String,
//     //     required: true,
//     // },
//     // previousmarriages: {
//     //     type: Number,
//     //     required: true,
//     // },
//     // mobno: {
//     //     type: String,
//     //     required: true,
//     // },
//     // secmobno: {
//     //     type: String,
//     //     required: true,
//     // },
//     // basedIn: {
//     //     type: String,
//     //     required: true,
//     // },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     }
// });

// userSchema.pre('save', async function(next) {
//     const user = this;
//     if (!user.isModified("password")) {
//         next();
//     }
//     try {
//         const saltRound = await bcrypt.genSalt(10);
//         const hash_password = await bcrypt.hash(user.password, saltRound);
//         user.password = hash_password;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// userSchema.methods.comparePassword = async function(password) {
//     return bcrypt.compare(password, this.password);
// };

// userSchema.methods.generateToken = async function() {
//     try {
//         return jwt.sign({
//             userId: this._id.toString(),
//             email: this.email,
//             isAdmin: this.isAdmin,
//         },
//         process.env.JWT_SECRET_KEY,
//         {
//             expiresIn: "30d",
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };

// const User = mongoose.model("User", userSchema);

// module.exports = User;
