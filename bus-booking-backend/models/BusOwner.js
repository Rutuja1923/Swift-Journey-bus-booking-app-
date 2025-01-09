const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const busOwnerSchema = new mongoose.Schema(
  {
    ownerId: { 
        type: String
    },
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    password: { 
        type: String, 
        required: true, 
        minLength: 8 
    },
    companyName: { 
        type: String, 
        required: true 
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

//password hash
busOwnerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//assign onwerID with default ObjectId
busOwnerSchema.pre("save", function (next) {
    if (!this.ownerId) {
      this.ownerId = `OWNER-${this._id}`;
    }
    next();
});

module.exports = mongoose.model("BusOwner", busOwnerSchema);
