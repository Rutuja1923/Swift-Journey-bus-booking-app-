const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const adminActionSchema = new Schema(
  {
    actionId: { 
        type: String, 
        default: () => `ACTION-${uuidv4()}`
    },
    performedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    actionType: { 
        type: String, 
        required: true,
        enum: ["addBus", "removeBus", "updateBus"] 
    },
    details: { 
        type: String 
    }
  },
  {
    versionKey: false,
    timestamps: { 
        createdAt: "performedAt", 
        updatedAt: "updatedAt" 
    }
  }
);

module.exports = mongoose.model("AdminAction", adminActionSchema);
