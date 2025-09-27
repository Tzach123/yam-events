const express = require('express')
const router = express.Router()
const fs = require('fs')

const prod = '/build/static/image/subCategory'
const dev = '/frontend/src/image/subCategory'
let rootFolder = dev
const data = [
  {
    id: 1,
    name: 'alternativeEquipment',
    path: `${rootFolder}/alternativeEquipment/`,
    clientNeededPath: `/image/subCategory/alternativeEquipment/`,
    subs: [
      {
        id: 1,
        name: 'beanbag/', //folder name
        title: 'פופים',
      },
      {
        id: 2,
        name: 'footstool/',
        title: 'הדומים',
      },
      {
        id: 3,
        name: 'mats/',
        title: 'מחצלות',
      },
      {
        id: 4,
        name: 'photons/',
        title: 'פוטונים',
      },
      {
        id: 5,
        name: 'pillows/',
        title: 'כריות',
      },
    ],
  },
  {
    id: 2,
    name: 'furniture',
    path: `${rootFolder}/furniture/`,
    clientNeededPath: `/image/subCategory/furniture/`,
    subs: [
      {
        id: 1,
        name: 'buffets/',
        title: 'מזנונים',
      },
      {
        id: 2,
        name: 'chairs/',
        title: 'כסאות',
      },
      {
        id: 3,
        name: 'tables/',
        title: 'שולחנות',
      },
    ],
  },
  {
    id: 3,
    name: 'servingDishes',
    path: `${rootFolder}/servingDishes/`,
    clientNeededPath: `/image/subCategory/servingDishes/`,
    subs: [
      {
        id: 1,
        name: 'barBowls/',
        title: 'קערות בר',
      },
      {
        id: 2,
        name: 'supplementaryDishes/',
        title: 'כלים נלווים',
      },
      {
        id: 3,
        name: 'glasses/',
        title: 'כוסות',
      },
      {
        id: 4,
        name: 'cutlery/',
        title: "סכו'ם",
      },
      {
        id: 5,
        name: 'plates/',
        title: 'צלחות',
      },
      {
        id: 6,
        name: 'pots/',
        title: 'סירים',
      },
      {
        id: 7,
        name: 'salters/',
        title: 'סלטרים',
      },
      {
        id: 8,
        name: 'servingBowls/',
        title: 'קערות הגשה',
      },
      {
        id: 9,
        name: 'chafingDish/',
        title: 'שיפינגים',
      },
    ],
  },
  {
    id: 4,
    name: 'supplementaryEquipment',
    path: `${rootFolder}/supplementaryEquipment/`,
    clientNeededPath: '/image/subCategory/supplementaryEquipment/',
    subs: [
      {
        id: 1,
        name: 'airConditioning/',
        title: 'מיזוג',
      },
      {
        id: 2,
        name: 'curtains/',
        title: 'פרגודים',
      },
      {
        id: 3,
        name: 'heatingAndCoolingUtensils/',
        title: 'כלי חימום וקירור',
      },
      {
        id: 4,
        name: 'napkins/',
        title: 'מפיות',
      },
      {
        id: 5,
        name: 'tents/',
        title: 'אוהלים',
      },
      {
        id: 6,
        name: 'tableCloths/',
        title: 'מפות',
      },
      {
        id: 7,
        name: 'parasols/',
        title: 'שמשיות',
      },
    ],
  },
]

router.route('/').get(async (req, res) => {
  try {
    const id = req.query.id
    const subid = req.query.subId
    let category = await data.find((category) => category.id == id)
    let sub = await category.subs.find((sub) => sub.id == subid)

    //reciving current location path
    //removing the backend/routers so we can get the base url.
    // e.x. C:/Users/asaf/Desktop/yam-events/ -- > base url
    var publicDir = require('path').join(__dirname, '/public')
    publicDir = require('path').resolve(__dirname, '../../')
    publicDir = publicDir.replace(/\\/g, '/')

    const url_client = category.clientNeededPath + sub.name
    const url = publicDir + category.path + sub.name

    console.log(url_client)
    console.log(url)

    await fs.readdir(url, (err, files) => {
      if (err) {
        res.status(404).send(err)
        console.log(err)
      } else {
        res.status(201).send({ files, path: url_client, title: sub.title })
      }
    })
  } catch (e) {
    res.status(400).send(e)
    console.log(e)
  }
})

module.exports = router
