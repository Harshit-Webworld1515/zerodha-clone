const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

// app.get("/addPositions", async (req, res) => {
//     const PositionsModel = require("./model/PositionsModel");
//     //  logic for adding holdings and position
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];
//     tempPositions.forEach( async(position) => {
//         const newPosition = new PositionsModel({
//             product: position.product,
//             name: position.name,
//             qty: position.qty,
//             avg: position.avg,
//             price: position.price,
//             net: position.net,
//             day: position.day,
//             isLoss: position.isLoss,
//         });
//         await newPosition.save();
//     });
//     res.send("Positions added successfully");
// });

app.get("/allHoldings", async (req, res) => {
    const HoldingsModel = require("./model/HoldingsModel");
    try {
        const allHoldings = await HoldingsModel.find();
        res.json(allHoldings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/allPositions", async (req, res) => {
    const PositionsModel = require("./model/PositionsModel");
    try {
        const allPositions = await PositionsModel.find();
        res.json(allPositions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); 
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("MongoDB connection error:", err);
    }
});
