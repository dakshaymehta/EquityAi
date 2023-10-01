const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello EquityAI');
});

app.listen(port, () => {
  console.log(`EquityAI backend listening at http://localhost:${port}`);
});
