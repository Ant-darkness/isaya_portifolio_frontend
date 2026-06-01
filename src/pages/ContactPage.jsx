import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import LoadingScreen from "../components/LoadingScreen";

export default function ContactPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/portfolio")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <LoadingScreen />;

  return (
    <div className="page-container">
      <Navbar profile={data.profile} />
      <Contact contact={data.contact} />
    </div>
  );
}

