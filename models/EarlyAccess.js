import mongoose, { model, Schema } from "mongoose";

const EarlyAccessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  walletAddress: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  }
})

export const EarlyAccessModel = mongoose.models.accessearlys || model("accessearlys", EarlyAccessSchema)