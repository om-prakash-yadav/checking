import React, { forwardRef } from "react";
import s from "./Modal.styles.module.scss";

const ModalContent = forwardRef(({ cardInfo, close }, ref) => {
 
  return (
    <div className="modal-content-container" ref={ref}>
      <div className={s.closeButton}>
        <button onClick={close}>&#10005;</button>
      </div>
      <h1 className={s.title}> {cardInfo.title} </h1>
      <div className={s.container}>
        <div className={s.image}>
          <img src={cardInfo.img} alt={cardInfo.title} />
        </div>
        <div className={s.description}>
          <h2>Description :- </h2>
          <p>{cardInfo.description}</p>
          <hr className={s.hr} />
          <div className={s.details}>
            <h3 className={s.registration} >Registrations open from :- </h3>
            <h3>Event start date :- {cardInfo.startDate}</h3>
            <h3>Event end date :- {cardInfo.endDate}</h3>
            <button className={`${s.button} ${s.buttonHyperion}`} ><span><span>Go to Event</span></span></button>
          </div>
        </div>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p> */}
    </div>
  );
});

ModalContent.displayName = "ModalContent";

export default ModalContent;
