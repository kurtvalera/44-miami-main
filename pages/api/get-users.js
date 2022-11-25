import AppConfig from "../../config/AppConfig";
import { EarlyAccessModel } from "../../models/EarlyAccess";
import mongoose from 'mongoose';

export default async function handler(req, res) {
  try {
    const { id } = req.query
    const { key } = req.headers

    if (!key || key !== AppConfig.key) {
      res.status(400).json({
        code: 400,
        message: key !== AppConfig.key ? "Key is Invalid" : "Please specify key in header"
      })
      return
    }

    if (!id) {
      res.status(400).json({
        code: 400,
        message: "Please specify id"
      })
      return
    }

    await mongoose.connect(AppConfig.mongoUri);
    const data = await EarlyAccessModel.find({ _id: { $gt: id } })

    res.status(200).json({
      data,
      code: 200,
      message: "Data successfully fetched."
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