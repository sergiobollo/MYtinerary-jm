import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'

export const Cities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('http://192.168.1.107:5001/api/cities/all').then((data) => {
      setCities(data.data)
      console.log(data.data)
    })
      .catch(err => console.log(err))
  }, [])

  return (
    <Fragment>
      <h3 style={{marginLeft: 20}}>CITIES</h3>
      <section className="Cities">
        {
          cities.map((el, index) => (
            <div className="City" key={index}>
              <h5>{el.country}</h5>
              <p>{el.city_name}</p>
            </div>
          ))
        }
      </section>
    </Fragment>
  );
};