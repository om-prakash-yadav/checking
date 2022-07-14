import React from 'react'
import s from './EventCard.styles.module.scss'

function EventCard(props) {

    return (
        <div className={s.card}>
          <img src={props.img} className={s.card__img} />
          <div className={s.card__body}>
            <h2 className={s.card__title}>{props.title}</h2>
            <div className={s.card__info}> 
                <p className={s.date}> {props.startDate} </p>
                <p className={s.location}> {props.location} </p>
            </div>
            
            <button onClick={() => {props.showModal(props)}} className={s.card__btn}>Read More</button>
          </div>
        </div>
      );
}

export default EventCard