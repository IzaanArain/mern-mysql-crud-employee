const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const { errorhandler } = require("./middlewares/errorHandler");
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  return res.send("<h1>Server is running</h1>");
});

app.use("/api/employees",require("./routes/employe.routes"));
app.use(errorhandler);
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
