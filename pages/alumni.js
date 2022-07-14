import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import AlumniSection from "../components/Alumni/AlumniSection";
import Title from "../components/Title"
import Loader from "../components/loader/Loader";

function Alumni() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://omprakash1.pythonanywhere.com/api/alumni/')
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
   ) :
  (
    <div style={styles} >
      <Header items={navigation} navPosition="right" home={false} />
      <Title title="OUR ALUMNI" font="45" margin="60" />
      
      <AlumniSection alumni={data}  year={2020} />
      <AlumniSection alumni={data} year={2021} />
      <AlumniSection alumni={data} year={2022} />
      <AlumniSection alumni={data}  year={2023} />
      <AlumniSection alumni={data} year={2024} />
      <AlumniSection alumni={data} year={2025} />
      <AlumniSection alumni={data}  year={2026} />
      <AlumniSection alumni={data} year={2027} />
      <AlumniSection alumni={data} year={2028} />
      <AlumniSection alumni={data}  year={2029} />
      <AlumniSection alumni={data} year={2030} />
      <AlumniSection alumni={data} year={2031} />
      <AlumniSection alumni={data}  year={2032} />
      <AlumniSection alumni={data} year={2033} />
      <AlumniSection alumni={data} year={2034} />
      <AlumniSection alumni={data}  year={2035} />
      <AlumniSection alumni={data}  year={2036} />
      <AlumniSection alumni={data}  year={2037} />
      <AlumniSection alumni={data}  year={2038} />
      <AlumniSection alumni={data}  year={2039} />
      <AlumniSection alumni={data}  year={2040} />
     
      <Footer />
    </div>
  );
}

export default Alumni;


export async function getStaticProps() {
  const res = await fetch("https://omprakash1.pythonanywhere.com/api/alumni/");
  const alumni = await res.json();

  return {
    props: {
      alumni,
    },
  };
}