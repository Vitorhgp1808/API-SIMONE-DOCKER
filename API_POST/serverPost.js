const express = require('express');
const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const app = express();
const port = 3001;


mongoose.connect(
  "mongodb+srv://vhgpaes:Vi123456@usuarios.vd2a7.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios"
);


const user = mongoose.model("user", {
  username: String,
  password: String,
});


app.use(express.json());

app.post('/',async (req, res) => {
    const { username, password } = req.body;
    const newUser = new user({ username, password });
    await newUser.save().then(() => console.log("user saved"));
    res.json(newUser + " saved");
});

app.listen(port, () => {
    moongoose.connect(
      'mongodb+srv://vhgpaes:Vi123456@usuarios.vd2a7.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios'
    );
    console.log(`Server is running on port ${port}`);
});