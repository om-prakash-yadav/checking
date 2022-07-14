import React, { useEffect, useState } from "react";
import Tiltle from "../Title";
import TeamCard from "./TeamCard";


function TeamSection({ teams, title, year }) {
  const [data, setData] = useState([]);


  useEffect(() => {
//  function to filter the teams data using year prop 
    function filterByYear(person) {
      if (person.year === year) {
        return true;
      }
      return false;
    }

    let FilteredArray = teams.filter(filterByYear);
    FilteredArray.sort((a, b) => {
      return a.order - b.order;
    });

    setData(FilteredArray);

  }, [year,teams]);

  return (
    <div className="flex-col  justify-center items-center">
      <Tiltle title={title} font="30" margin="45" />
      <div className="flex flex-wrap justify-center items-center w-full ">
        {data.map(function (d, i) {
          return (
            <TeamCard d={d} key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
