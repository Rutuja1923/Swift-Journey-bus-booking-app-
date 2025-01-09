const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    password: { 
      type: String, 
      required: true, 
      minLength: 8, 
      select: false
    },
    role: { 
      type: String, 
      enum: ['traveler', 'admin', 'busOwner'], 
      default: 'traveler' 
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', userSchema);
