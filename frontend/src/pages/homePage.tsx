import { useEffect, useState } from "react";

type Status = "loading" | "connected" | "error";

export default function HomePage() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3001";
    fetch(`${apiUrl}/health`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status === "ok" ? "connected" : "error");
      })
      .catch(() => setStatus("error"));
  }, []);

  const messages: Record<Status, string> = {
    loading: "Checking connection...",
    connected: "Connected to database ✓",
    error: "Database connection failed ✗",
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>NEW KitchenSync</h1>
      <p>{messages[status]}</p>
    </div>
  );
}
