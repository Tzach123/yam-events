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
  });

  const [modalState, setModalState] = useState<{
    activeImageIndex: number | null;
    ifShowModal: boolean;
  }>({
    activeImageIndex: null,
    ifShowModal: false,
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
        });
        setModalState({
          activeImageIndex: null,
          ifShowModal: false,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const showModal = (id: number) => {
    setModalState({
      activeImageIndex: id,
      ifShowModal: true,
    });
  };

  const hideModal = () => {
    setModalState({
      activeImageIndex: null,
      ifShowModal: false,
    });
  };

  const setActiveIndexHandler = (activeIndex: number) => {
    setModalState({
      activeImageIndex: activeIndex,
      ifShowModal: true,
    });
  };

  return (
    <>
      <div className={classes.cards__container}>
        <h1>{state.title}</h1>
        {state?.data?.length
          ? state.data.map((img, index) => {
              let url = `${state.path}${img}`;
              let name = img.split(".").slice(0, -1).join(".");
              return (
                <Card
                  key={index}
                  id={index}
                  img={url}
                  showModal={() => showModal(index)}
                  name={name}
                />
              );
            })
          : "לא קיימות תמונות להמחשה !"}
      </div>
      <Modal show={modalState.ifShowModal} handleClose={hideModal}>
        <CarouselItems
          setActiveIndex={setActiveIndexHandler}
          activeIndex={modalState.activeImageIndex}
          dataItems={state.data}
          dataPath={state.path}
        />
      </Modal>
    </>
  );
};

export default SubCategory;
