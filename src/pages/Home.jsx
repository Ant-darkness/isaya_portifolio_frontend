import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/portfolio")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-2xl">
        Loading Portfolio...
      </div>
    );
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <Hero profile={data.profile} />

      <Skills skills={data.skills} />

      <Qualifications qualifications={data.qualifications} />

      <Projects projects={data.projects} />

      <Contact contact={data.contact} />
    </div>
  );
}
