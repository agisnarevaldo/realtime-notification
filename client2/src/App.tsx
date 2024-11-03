import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { io } from "socket.io-client";
import reactLogo from "./assets/react.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("notifyUser", (message: string) => {
      setMessage(message);
      toast(message);
    });

    return () => {
      socket.off("notifyUser");
      socket.disconnect();
    };
  });
  return (
    <>
      <ToastContainer />
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>Client 2 APP</h1>
        <h2>Tugas Kelompok Sistem Terdistribusi</h2>
        <p>Anggota:</p>
        <ul style={{ textAlign: "left" }}>
          <li>Muhamad Agisna Revaldo (2203010405)</li>
          <li>Faisal Wibowo (2203010412)</li>
        </ul>
      </div>
    </>
  );
}

export default App;
