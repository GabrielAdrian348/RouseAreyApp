import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
    port: process.env.PORT ?? 2323,
    host: process.env.HOST ?? "localhost",
};

const clientTCP = net.connect(options);

clientTCP.on("connect", () => {
    console.log("Cliente conectado");
    const argv = process.argv.splice(2);

    clientTCP.write(JSON.stringify(argv));

    clientTCP.end();
});