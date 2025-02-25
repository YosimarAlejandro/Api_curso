require("dotenv").config();//esta cosa se encarga de lentar el server
const express = require("express");//manejamos las rutas con este
const mongoose = require("mongoose");//con este interractuamos con mongo
const cors = require("cors");//este permite acceso a la api wazaaaaaa

const app = express();
const port = process.env.PORT || 3000;//aqui definimos el puerto a usar fuk youu

// Middleware
app.use(cors());//aqui hacemos el dominio util y visible 
app.use(express.json());//aqui le decimos que las solicitudes tengan formato json 
// where they belong baby jslNKNJ
// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })//esat cosa la definimos en el archivo .env y con ello nos conecta a la base 
  .then(() => console.log("✅ Conectado a MongoDB"))//aqui entramos al aprtado logico que nos dice que pada sinos conectamo o no
  .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡API con MongoDB funcionando!");
});

//
app.listen(port, () => {//aqui llaammos al puerto y vemos su estado
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`); //solo al final madamos el status del proceso 
});
