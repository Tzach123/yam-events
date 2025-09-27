import React, { Component } from 'react'
import Card from '../../Components/card/card'
import CarouselItems from '../../Components/carouselItems/carouselItems'
import Modal from '../../Components/UI/modal/modal'

import classes from './SubCategory.module.css'
import axios from 'axios'

class SubCategory extends Component {
  state = {
    data: [],
    path: '',
    title: '',
    ifShowModal: false,
    activeIndex: 0,
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    //http://localhost:5000
    axios
      .get('/sub', {
        params: {
          id: urlParams.get('Id'),
          subId: urlParams.get('subId'),
        },
      })
      .then((res) => {
        console.log(res.data)
        this.setState({
          data: res.data.files,
          path: res.data.path,
          title: res.data.title,
        })
      })
      .catch((err) => console.log(err))
  }

  showModal = (e, id) => {
    this.setState({
      ifShowModal: true,
      activeIndex: id,
    })
  }

  hideModal = () => {
    this.setState({ ifShowModal: false })
  }

  setActiveIndexHandler = (activeIndex) => {
    this.setState({ activeIndex: activeIndex })
  }

  render() {
    let cards = 'לא קיימות תמונות להמחשה !'
    if (this.state.data || this.state.data.length !== 0) {
      cards = this.state.data.map((img, index) => {
        let url = `${this.state.path}${img}`
        let name = img.split('.').slice(0, -1).join('.')
        return (
          <Card
            key={index}
            setActiveIndex={this.setActiveIndexHandler}
            id={index}
            img={url}
            showModal={(event) => this.showModal(event, index)}
            name={name}
          />
        )
      })
    }

    return (
      <>
        <div className={classes.cards__container}>
          <h1>{this.state.title}</h1>
          {cards}
        </div>
        <Modal show={this.state.ifShowModal} handleClose={this.hideModal}>
          <div className={classes.carousel__container}>
            <CarouselItems
              setActiveIndex={this.setActiveIndexHandler}
              activeIndex={this.state.activeIndex}
              dataItems={this.state.data}
              dataPath={this.state.path}
            />
          </div>
        </Modal>
      </>
    )
  }
}

export default SubCategory
