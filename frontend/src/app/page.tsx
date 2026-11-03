
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Đang kết nối...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => {
        if (!res.ok) throw new Error("Backend không phản hồi");
        return res.json();
      })
      .then((data) => {
        setStatus(
          data.status === "ok"
            ? "Backend đã kết nối thành công"
            : "Backend chưa sẵn sàng"
        );
      })
      .catch(() => setStatus("Không thể kết nối Backend"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <h1 className="mb-4 text-4xl font-bold">
        Personal AI System
      </h1>

      <p className="mb-6 text-slate-400">
        Your Personal Artificial Intelligence
      </p>

      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
        <p className="text-lg">{status}</p>
      </div>
    </main>
  );
}
