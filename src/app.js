const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true}))

app.get('/', (req, res) => {
    const query = req;
    res.send({
        message: 'helloooooo',
        req
    });
})

// app.listen(5000, err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`Server is running on port 5000`);
//     }
// });

module.exports = app;
