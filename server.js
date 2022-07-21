const express = require('express');
const app = express();
const path = __dirname + '/app/views/';
const PORT = process.env.PORT || 3001;

app.use(express.static(path));

app.get('/', (req, res) => {
    // response.status(200).send('This is the home page');
    res.sendFile(path + "index.html");
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));