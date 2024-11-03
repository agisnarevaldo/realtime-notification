"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [message, setMessage] = useState("");
  const sendNotification = () => {
    const socket = io("http://localhost:3000");
    socket.emit("notifyUser");
    toast("Notification Sent");
  };

  return (
    // style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    <div style={{ alignContent: "center", height: "100vh" }}>
      <ToastContainer />
      <div className="w-max mx-auto text-left flex flex-col gap-40">
        <div>
          <h1 className="text-3xl font-bold">Client 1 APP - Admin</h1>
          <h2 className="text-xl ">Tugas Kelompok Sistem Terdistribusi</h2>
        </div>
        <Button
          onClick={sendNotification}
          variant="destructive"
          className="w-max mx-auto"
        >
          Kirim Notifikasi ke semua user
        </Button>
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

export default Admin;
