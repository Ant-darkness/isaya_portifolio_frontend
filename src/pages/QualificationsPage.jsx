import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Qualifications from "../components/Qualifications";

export default function QualificationsPage() {
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
      <Qualifications qualifications={data.qualifications} />
    </div>
  );
}
