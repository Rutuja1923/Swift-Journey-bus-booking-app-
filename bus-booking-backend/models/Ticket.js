const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    ticketId: { 
        type: String, 
        default: () => `TICKET-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    busId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Bus", 
        required: true 
    },
    seatsBooked: { 
        type: [Number], 
        required: true 
    },
    totalAmount: { 
        type: Number, 
        required: true 
    },
    bookingDate: { 
        type: Date, 
        default: Date.now 
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
