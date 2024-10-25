const express = require('express');
const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const app = express();
const port = 3003;

mongoose.connect(
  "mongodb+srv://vhgpaes:Vi123456@usuarios.vd2a7.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios"
);

const user = mongoose.model("user", {
    username: String,
    password: String,
    });

app.use(express.json());

app.put('/:id', async (req,res) => { 
    const {id} = req.params;
    const {username, password} = req.body;
    const userUpdate = await user.findByIdAndUpdate(id, {username, password});
    res.json('put ' + id);
})

app.listen(port, () => {
    moongoose.connect(
      'mongodb+srv://vhgpaes:Vi123456@usuarios.vd2a7.mongodb.net/?retryWrites=true&w=majority&appName=Usuarios'
    );
    console.log(`Server is running on port ${port}`);
});