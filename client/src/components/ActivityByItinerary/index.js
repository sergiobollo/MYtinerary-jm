import React from "react";
import "./ActivityByItinerary.css";
import Comments from "../Comments";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export const ActivityByIitinerary = ({ activity }) => {
  return (
    <div className="ActivityByItinerary__item">
      <img src={activity.img_url} alt={activity.activity_name} />
      <p>{activity.activity_name}</p>
      <div className="ActivityByItinerary__address">
        <p>
          <FaMapMarkedAlt style={{ color: "#380e7f" }} /> {activity.address}
        </p>
      </div>
      <div className="ActivityByItinerary__price">
        <p>
          {activity.price}
        </p>
        <GiMoneyStack style={{ color: "#4dd599" }} />
      </div>
      <Comments activityId={activity._id} />
    </div>
  );
};
