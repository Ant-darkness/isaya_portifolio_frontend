import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/portfolio")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
          color: "var(--muted)",
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "2px solid var(--pink)",
            borderTopColor: "transparent",
            animation: "spin 0.7s linear infinite",
            display: "inline-block",
          }}
        />
        Loading...
      </div>
    );

  return (
    <div className="page-container">
      <Navbar profile={data.profile} />
      <Hero profile={data.profile} contact={data.contact} />
    </div>
  );
}
