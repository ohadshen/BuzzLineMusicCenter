
import {Server} from "socket.io";

export let io = null;

export const initSocketIO = (server) => {
    io =  new Server(server, { 
        cors: {
            origin: "*"
        }   
    });
    io.on("connection", (socket) => {
        console.log("New client connected");
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });
}