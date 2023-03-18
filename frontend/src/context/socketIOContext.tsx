import React, { useEffect } from "react";
import { io, Socket } from "socket.io-client";

export interface SocketIOContextValue {
  socket: Socket;
}

export const SocketIOContext = React.createContext({});

export const SocketIOProvider = ({ children }) => {
  const [socket, setSocket] = React.useState<Socket>(null);

  // "undefined" means the URL will be computed from the `window.location` object
  const URL = "http://localhost:3001";

  useEffect(() => {
    const socket = io(URL);
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  const value: SocketIOContextValue = { socket };

  return (
    <SocketIOContext.Provider value={value}>
      {children}
    </SocketIOContext.Provider>
  );
};
