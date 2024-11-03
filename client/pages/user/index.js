"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("notifyUser", (message) => {
      setMessage(message);
      toast(message);
    });
    // Cleanup function to remove the event listener
    return () => {
      socket.off("notifyUser ");
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ alignContent: "center", minHeight: "100vh" }}>
      <ToastContainer />
      <div className="w-max mx-auto text-left flex flex-col gap-40">
        <div>
          <h1 className="text-3xl font-bold">Client 1 APP - User</h1>
          <h2 className="text-xl ">Tugas Kelompok Sistem Terdistribusi</h2>
        </div>
        <div>
          <p>Anggota:</p>
          <ul className="list-disc list-inside" style={{ textAlign: "left" }}>
            <li>Muhamad Agisna Revaldo (2203010405)</li>
            <li>Faisal Wibowo (2203010412)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
