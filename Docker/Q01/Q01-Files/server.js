const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  const msg = process.env.MSG || '';
  res.send('Hello, the message is ' + msg);
});

app.listen(port, () => {
  console.log(`Awesome-web started!`)
});
