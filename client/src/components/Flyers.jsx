import React, { useEffect, useState } from "react";
import axios from "axios";
function Flyers() {
  const [flyersList, setFlyersList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getFlyers")
      .then((response) => {
        setFlyersList(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }, []);
  return (
    <div>
      <ul className="xl:flex xl:justify-between">
        {flyersList.map((flyer, index) => (
          <>
            <li>
              <a href={`/flyer/${flyer._id.toString()}`}>
              <img
                className="h-72 w-56 p-8 cursor-pointer"
                src={flyersList[index].thumbnailURL}
                alt=""
              />
              </a>
             
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Flyers;
