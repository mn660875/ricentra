import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    country: { type: String, required: true },
    quantity: { type: String, required: true },
    rice_type: { type: String, required: true },
    phone: { type: String, required: true, 
        match: [/^\+?[1-9]\d{7,14}$/, 'Please enter a valid phone number'], },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: { type: String },
  },
  {
    timestamps: true, // optional: adds createdAt & updatedAt fields
  }
);

// Fix collection name typo: "inquires" → "inquiries"
export const Inquiry = mongoose.models.inquiries || mongoose.model("inquiries", inquirySchema);
