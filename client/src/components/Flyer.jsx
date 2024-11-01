import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Flyer() {
  const params = useParams();
  const [flyer, setFlyer] = useState(null);
  let id = params.id;
  useEffect(() => {
    const fullId = typeof id === "string" ? id : id.toString();
    console.log(fullId);
    console.log("this is the msot annoying thing ever")
    axios
      .get(`/api/flyer/${fullId}`)
      .then((response) => {
        setFlyer(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      {console.log(flyer)}
      <iframe
        className="w-screen h-screen"
        src={flyer?.flyerURL}
        seamless="seamless"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Flyer;
