import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Qualifications from "../components/Qualifications";
import LoadingScreen from "../components/LoadingScreen";

export default function QualificationsPage() {
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
      <Qualifications qualifications={data.qualifications} />
    </div>
  );
}
