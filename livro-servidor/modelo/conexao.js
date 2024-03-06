const mongoose = require("mongoose");

const banco = mongoose.connection;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect("mongodb://localhost:27017", options);

banco.on("error", console.error.bind(console, "Erro de conexão com MongoDB:"));
banco.once("open", () =>
  console.log("Conexão efetuada com sucesso com MongoDB.")
);

module.exports = banco;
