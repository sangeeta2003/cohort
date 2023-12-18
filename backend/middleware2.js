const express = require('express');
const app = express();

app.get('/health-checkup', function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.query.kidneyid;

    if (username !== "sangeeta" || password !== "pass") {
        res.status(400).json({ msg: "Something's wrong with your input" });
    } else if (kidneyid !== "1" && kidneyid !== "2") {
        res.status(400).json({ msg: "Invalid kidney ID" });
    } else {
        res.json({ msg: "Your kidney is fine" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
