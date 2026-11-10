const {model}=require("mongoose");

const PositionsSchema= require("../schemas/PositionsSchema");
const { positions } = require("../../dashboard/src/data/data");

const PositionsModel = new model("position",PositionsSchema);

module.exports= {PositionsModel};