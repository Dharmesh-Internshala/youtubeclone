import express from "express";
import mongoose from "mongoose";
import videoRoute from "./Routes/videoroute";
import authRoutes from "./Routes/Userroutes";
import commentRoutes from "./Routes/commentroutes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

// Use the auth routes
app.use("/api", authRoutes);

app.use("/api", videoRoute)

app.use("/api", commentRoutes)

mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((error) => console.log(error));
