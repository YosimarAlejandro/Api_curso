const mongoose = require("mongoose");

// Modelo de Usuario
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    id_grado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grado",
        required: true
    }
});

const User = mongoose.model("User", UserSchema);