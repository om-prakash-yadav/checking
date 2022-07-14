import React, { useEffect, useState } from "react";
import Tiltle from "../Title";
import AlumniCard from "./AlumniCard";


function AlumniSection({ alumni, year }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    function filterByYear(person) {
      if (person.passyear === year && person.name) {
        return true;
      }
      return false;
    }

    let FilteredArray = alumni.filter(filterByYear);


    setData(FilteredArray);

  }, [year,alumni]);

  return (



    <div className="flex-col  justify-center items-center ">
      {data.length > 0 && <>
        <Tiltle title={`${year} BATCH`} font="30" margin="45" />
        <div className="flex flex-wrap justify-center items-center w-full ">
          {data.map(function (d, i) {
            return (
              <AlumniCard d={d} key={i} />
            );
          })}
        </div>
      </>
      }

    </div>
  );
}

export default AlumniSection;
