import React, { useState, useEffect } from "react";
import Card from "../../Components/card/card";
import CarouselItems from "../../Components/carouselItems/carouselItems";
import Modal from "../../Components/UI/modal/modal";
import { SubCategoryProps, SubCategoryState } from "../../types";

import classes from "./SubCategory.module.css";
import axios from "axios";

const SubCategory: React.FC<SubCategoryProps> = () => {
  const [state, setState] = useState<SubCategoryState>({
    data: [],
    path: "",
    title: "",
    ifShowModal: false,
    activeIndex: 0,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    //http://localhost:5000
    axios
      .get("/sub", {
        params: {
          id: urlParams.get("Id"),
          subId: urlParams.get("subId"),
        },
      })
      .then((res) => {
        setState({
          data: res.data.files,
          path: res.data.path,
          title: res.data.title,
          ifShowModal: false,
          activeIndex: 0,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const showModal = (e: React.MouseEvent, id: number) => {
    setState({
      ...state,
      ifShowModal: true,
      activeIndex: id,
    });
  };

  const hideModal = () => {
    setState({ ...state, ifShowModal: false });
  };

  const setActiveIndexHandler = (activeIndex: number) => {
    setState({ ...state, activeIndex: activeIndex });
  };

  let cards: string | React.ReactElement[] = "לא קיימות תמונות להמחשה !";
  if (state.data && state.data.length !== 0) {
    cards = state.data.map((img, index) => {
      let url = `${state.path}${img}`;
      let name = img.split(".").slice(0, -1).join(".");
      return (
        <Card
          key={index}
          setActiveIndex={setActiveIndexHandler}
          id={index}
          img={url}
          showModal={(event) => showModal(event, index)}
          name={name}
        />
      );
    });
  }

  return (
    <>
      <div className={classes.cards__container}>
        <h1>{state.title}</h1>
        {cards}
      </div>
      <Modal show={state.ifShowModal} handleClose={hideModal}>
        <div className={classes.carousel__container}>
          <CarouselItems
            setActiveIndex={setActiveIndexHandler}
            activeIndex={state.activeIndex}
            dataItems={state.data}
            dataPath={state.path}
          />
        </div>
      </Modal>
    </>
  );
};

export default SubCategory;
