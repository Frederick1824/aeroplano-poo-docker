import express from "express";
import cors from "cors";

import { Aeroplano } from "./models/Aeroplano";
import { Motor } from "./models/composicion/Motor";
import { Ala } from "./models/composicion/Ala";

import { Piloto } from "./models/agregacion/Piloto";
import { Aeropuerto } from "./models/agregacion/Aeropuerto";
import { CompaniaAerea } from "./models/agregacion/CompaniaAerea";

const app = express();

app.use(cors());
app.use(express.json());
console.log("CARGÓ EL SERVER NUEVO");

const aeroplanos: Aeroplano[] = [
    new Aeroplano(
        1,
        "Boeing 747",
        new Motor("Turbina", 5000),
        new Ala("Aluminio", 30),
        new Piloto("Juan Pérez", "ABC123"),
        new Aeropuerto("Ezeiza", "Buenos Aires"),
        new CompaniaAerea("Aerolíneas GPT")
    )
];

app.get("/", (req, res) => {
    res.send("Backend Aeroplano funcionando");
});

app.get("/aeroplanos", (req, res) => {
    res.json(aeroplanos);
});
app.post("/aeroplanos", (req, res) => {

    const nuevoAeroplano = req.body;

    aeroplanos.push(nuevoAeroplano);

    res.status(201).json({
        mensaje: "Aeroplano creado",
        data: nuevoAeroplano
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// UPDATE
app.put("/aeroplanos/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = aeroplanos.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensaje: "Aeroplano no encontrado"
        });
    }

    aeroplanos[index] = req.body;

    res.json({
        mensaje: "Aeroplano actualizado",
        data: aeroplanos[index]
    });

});


// DELETE
app.delete("/aeroplanos/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = aeroplanos.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensaje: "Aeroplano no encontrado"
        });
    }

    const eliminado = aeroplanos.splice(index, 1);

    res.json({
        mensaje: "Aeroplano eliminado",
        data: eliminado
    });

});