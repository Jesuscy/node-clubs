const mongoose = require("mongoose");

const pass =
  "mongodb+srv://lrojas20014:deMrp72hTMU9lPRm@cluster0.fgairfd.mongodb.net/nodeclubs?retryWrites=true&w=majority&appName=Cluster0";
const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(pass);
    console.log("INFO: Conexión a BD correcta:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};

module.exports = { connectMongo };
