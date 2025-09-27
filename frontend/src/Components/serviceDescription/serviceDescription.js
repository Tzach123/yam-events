import React from 'react'

import classes from './serviceDescription.module.css'
import ServiceDescriptionCard from './serviceDescriptionCard/serviceDescriptionCard'

const serviceDescription = (props) => {
  let a = props.serviceDescriptionCardsArr
  return (
    <div className={classes.serviceDescription_container}>
      <div className={classes.a}>
        <ServiceDescriptionCard
          title={a[0].title}
          icon={a[0].icon}
          description={a[0].description}
          index={1}
        />
        <ServiceDescriptionCard
          title={a[1].title}
          icon={a[1].icon}
          description={a[1].description}
          index={2}
        />
      </div>
      <div className={classes.a}>
        <ServiceDescriptionCard
          title={a[2].title}
          icon={a[2].icon}
          description={a[2].description}
          index={3}
        />
        <ServiceDescriptionCard
          title={a[3].title}
          icon={a[3].icon}
          description={a[3].description}
          index={4}
        />
      </div>
    </div>
  )
}

export default serviceDescription
