import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT ?? 2323;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
    socket.on("data", () =>{

    });
    socket.on("close", () =>{
        console.log("Cliente desconectado");
    });
    socket.on("error", () =>{
        console.log("Cliente error");
    });

    console.log("Cliente conectado", new Date().toLocaleString());
}),


serverTCP.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto: ${port} - ${new Date().toLocaleString()}`);
});