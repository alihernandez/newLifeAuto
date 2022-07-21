const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get('/', (request, response) => {
    response.status(200).send('This is the home page');
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));