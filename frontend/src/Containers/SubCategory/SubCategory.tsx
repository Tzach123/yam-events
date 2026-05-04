import React, { useState, useEffect } from "react";
import Card from "../../Components/card/card";
import CarouselItems from "../../Components/carouselItems/carouselItems";
import Modal from "../../Components/UI/modal/modal";
import { SubCategoryProps, SubCategoryState } from "../../types";

import classes from "./SubCategory.module.css";
import axios from "axios";
import Loader from "../../Components/UI/loader/loader";

const SubCategory: React.FC<SubCategoryProps> = () => {
  const [state, setState] = useState<SubCategoryState>({
    data: [],
    path: "",
    title: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
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
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const showModal = (id: number) => {
    setSelectedIndex(id);
    setIsModalOpen(true);
  };

  const setActiveIndexHandler = (activeIndex: number) => {
    setSelectedIndex(activeIndex);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  if (loading) return <Loader />;
  if (error) return (
    <div className={classes.error__container}>
      <p className={classes.error__message}>משהו השתבש, אנא נסה שוב</p>
      <button className={classes.error__btn} onClick={() => window.location.reload()}>רענן דף</button>
    </div>
  );

  const cards = state.data?.map((img, index) => {
    let url = `${state.path}${img}`;
    let name = img.split(".").slice(0, -1).join(".");
    return (
      <Card
        key={index}
        img={url}
        showModal={() => showModal(index)}
        name={name}
        isSelected={index === selectedIndex}
      />
    );
  })

  return (
    <>
      <div className={classes.sub_group_container}>
        <h1>{state.title}</h1>


        {cards?.length
          ?
          <div className={classes.cards__container} >
            {cards}
          </div>
          : "לא קיימות תמונות להמחשה !"}
      </div>
      <Modal show={isModalOpen} handleClose={hideModal}>
        <CarouselItems
          setActiveIndex={setActiveIndexHandler}
          activeIndex={selectedIndex ?? 0}
          dataItems={state.data}
          dataPath={state.path}
        />
      </Modal>
    </>
  );
};

export default SubCategory;
