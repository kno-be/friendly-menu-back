const express = require('express');
const { handler } = require('./controller');
const port = process.env.PORT || 3000;
require('dotenv').config();

const app = express();
app.use(express.json());

app.post("*", async (req, res) => {
    res.send(await handler(req));
})

app.get("*", async (req, res) => {
  res.send(await handler(req));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
