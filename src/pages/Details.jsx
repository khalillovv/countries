import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> back
      </Button>
      {country && <Info navigate={navigate} {...country} />}
    </div>
  );
};
