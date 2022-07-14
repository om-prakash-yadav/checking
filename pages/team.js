import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import TeamSection from "../components/Teams/TeamSection";
import Title from "../components/Title"
import Loader from "../components/loader/Loader";

function Team() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://omprakash1.pythonanywhere.com/api/student/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!data) return <p>Backend have some problem check your api</p>





  const styles = {
    marginTop : "120px"
  }
  
 
 
 
   return isLoading ? (
     <div>
     <Loader/>
     </div>
   ) :(
    <div style={styles}  >
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR TEAM" font="45" margin="60" />
      <TeamSection teams={data} title="OFFICE BEARERS" year={4} />
      <TeamSection teams={data} title="THIRD YEARS" year={3} />
      <TeamSection teams={data} title="SECOND YEARS" year={2} />
      <Footer />
    </div>
  );
}

export default Team;
