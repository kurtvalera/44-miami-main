import AppConfig from "../../config/AppConfig";
import { EarlyAccessModel } from "../../models/EarlyAccess";
import mongoose from 'mongoose';

const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/);
const walletRegex = new RegExp(/^0x[a-fA-F0-9]{40}$/)

export default async function handler(req, res) {
  try {
    const { name, email, source, walletAddress } = req.body;

    if (!name || !source || !email || !walletAddress) {
      res.status(400).json({
        code: 400,
        message: "Please provide the required details i.e Name, email and wallet address"
      })
      return
    }

    const isValidWallet = walletRegex.test(walletAddress)
    if(!isValidWallet) {
      res.status(400).json({
        code: 400,
        message: "Please enter valid wallet address."
      })
      return
    }

    const isValidEmail = emailRegex.test(email)
    if (!isValidEmail) {
      res.status(400).json({
        code: 400,
        message: "Please enter valid email."
      })
      return
    }

    await mongoose.connect(AppConfig.mongoUri);

    const existingUser = await EarlyAccessModel.findOne({ email })

    if (existingUser) {
      res.status(409).json({
        code: 409,
        message: "Email already exist in early access."
      })
      return
    }

    await EarlyAccessModel.create({
      name, source, email, walletAddress
    })

    res.status(200).json({
      code: 200,
      message: "Successfully joined early access."
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      code: 500,
      message: "Something went wrong"
    })
  } finally {
    await mongoose.disconnect()
  }
}