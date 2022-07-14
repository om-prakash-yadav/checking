import React, { useEffect, useState } from "react";
import s from "../styles/Events.module.scss";
import Header from "../components/Header";
import Tiltle from "../components/Title";
import navigation from "../data";
import Footer from "../components/Footer";
import EventCard from "../components/EventsCard";
import Modal from "../components/EventsCard/Modal.component";
import Loader from "../components/loader/Loader";

const Events = () => {

//animation code
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardInfo, setCardInfo] = useState(false);

  const showModal = (props) => {
    setCardInfo(props);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };




  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://omprakash1.pythonanywhere.com/api/events/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!data) return <p>Backend have some problem check your api</p>





  const styles = {
    marginTop: "120px"
  }




  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) :



    (
      <div className={s.container}>
        <div>
          <Header items={navigation} navPosition="right" home={false} />

          <Tiltle title="OUR EVENTS" font="45" margin="75" />
          <div className={s.wrapper}>
            {data.map((event) => {
              return (
                <EventCard
                  key={event.id}
                  img={event.Image}
                  title={event.EventName}
                  description={event.Description}
                  startDate={event.StartDate}
                  endDate={event.EndDate}
                  location={event.Location}
                  showModal={showModal}
                />
              );
            })}
            {/* <EventCard
            img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
            title="Tie Up Boots"
            description="Fall Favorite • Boots"
            date="1/06/2022"
            location="Online"
            showModal={showModal}
          /> */}
          </div>
          <Modal
            visible={isModalVisible}
            close={closeModal}
            cardInfo={cardInfo}
          />
          <Footer />
        </div>
      </div>
    );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch("https://omprakash1.pythonanywhere.com/api/events/");
  const events = await res.json();

  // By returning { props: { events } }, the component
  // will receive `events` as a prop at build time
  return {
    props: {
      events,
    },
  };
}

export default Events;
