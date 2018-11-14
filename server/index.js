const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('endpoint live')
});

const PORT = 4001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));