const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors("*"))

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))

app.get("/", (req,res,next) => {
    const obj = {
        id: Math.floor(Math.random()*(11-1)+1),
        title: `Producto: ${Math.floor(Math.random()*(11-1)+1)}`,
        price: parseFloat(Math.random()*(10000-0)+0).toFixed(2),
        thumbnail: `Foto: ${Math.floor(Math.random()*(11-1)+1)}`
    }

    const obj_str = JSON.stringify(obj)
    res.send(obj_str)
})