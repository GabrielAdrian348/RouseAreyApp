
import fs from "node:fs";


const PATH = "./log/historyUser.json";


// Leer el historial
const readHistory = () => {
    const jsonData = fs.readFileSync(PATH);
    return JSON.parse(jsonData.toString());
};

// Reescribir el historial
const writeHistory = (state, id) => {
    const data = readHistory();

    const register = {
        id: id,
        date: new Date().toLocaleString(),
    }

    if (state === "connected") {
        data.userConnection.push(register);
    } else if ("disconnected") {
        data.userDisconnection.push(register);
    }
    
    const jsonData = JSON.stringify(data);

    fs.writeFileSync(PATH, jsonData);
};

export {readHistory, writeHistory};