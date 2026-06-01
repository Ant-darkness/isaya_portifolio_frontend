import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import LoadingScreen from "../components/LoadingScreen";

export default function ProjectsPage() {
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
      <Projects projects={data.projects} />
    </div>
  );
}
