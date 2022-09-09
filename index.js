const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8765;

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/768e4853-d3e8-407a-abca-51dd3e9d1454.html", async (req, res) => {
  res.sendFile(
    path.join(
      __dirname + "/frontend/build/768e4853-d3e8-407a-abca-51dd3e9d1454.html"
    )
  );
});

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
