const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const busSchema = new Schema(
  {
    busId: { 
        type: String, 
        default: () => `BUS-${uuidv4()}`
    },
    name: { 
        type: String, 
        required: true 
    },
    company: { 
        type: String, 
        required: true 
    },
    from: { 
        type: String, 
        required: true 
    },
    to: { 
        type: String, 
        required: true 
    },
    departureTime: { 
        type: Date, 
        required: true 
    },
    arrivalTime: { 
        type: Date, 
        required: true 
    },
    totalSeats: { 
        type: Number, 
        required: true 
    },
    availableSeats: { 
        type: Number, 
        required: true 
    },
    ticketPrice: { 
        type: Number, 
        required: true 
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "BusOwner", 
        required: true 
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("Bus", busSchema);
