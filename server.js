const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

let posts = [];

app.post("/post", (req, res) => {
    const { content } = req.body;
    posts.push(content);
    res.status(200).send("Gönderi kaydedildi.");
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} adresinde çalışıyor.`);
});
