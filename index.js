import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors"
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://admin:12344321@cluster0.wpopuu7.mongodb.net/?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`server started on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()