const express = require('express');
const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://vhgpaes:Vi123456@usuarios.vd2a7.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios"
);

const user = mongoose.model("user", {
    username: String,
    password: String,
});


app.get('/allUsers', async (res) => {
    if (user.find() == null) {
        const allUsers = await user.find();
    }
    res.json(allUsers);
});

app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const userFind = await user.findById(id);
    res.json(userFind);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});