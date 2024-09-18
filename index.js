const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("*", async (req, res) => {
    console.log(req.body)
    res.send("hello world");
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
