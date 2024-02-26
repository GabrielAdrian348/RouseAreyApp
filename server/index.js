import net from "node:net";
import dotenv from "dotenv";
import { writeHistory } from "../utils/handleHistory.js";
dotenv.config();

let port = process.env.PORT ?? 2323;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
    socket.on("data", (bufferData) =>{
        const data = JSON.parse(bufferData.toString());
        console.log(data);
    });
    socket.on("close", () =>{
        console.log("Cliente desconectado");
        writeHistory("disconnected");
    });
    socket.on("error", () =>{
        console.log("Cliente error");
    });

    console.log("Cliente conectado", new Date().toLocaleString());
 
    writeHistory("connected");
}),


serverTCP.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto: ${port} - ${new Date().toLocaleString()}`);
});