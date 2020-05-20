const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/tanya-chat'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/tanya-chat/' });
});
app.listen(process.env.PORT || 8080);
