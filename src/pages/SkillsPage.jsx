import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function SkillsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/portfolio")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  return (
    <div className="page-container bg-[#05010d] text-white">
      <Navbar profile={data.profile} />
      <Skills skills={data.skills} />
    </div>
  );
}
