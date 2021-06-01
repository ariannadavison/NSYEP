import React from "react";
import "./paragraph.css";
import placeholder from './placeholder-photo.png';

const Paragraph = () => {
  return (
    <div className="paragraph margins">
      <div className="paragraph__ribbon">
        <span>tempor id eu nisl nunc</span>
      </div>

      <div className="paragraph__text margins">
        <div className="paragraph__column-one">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mattis enim ut tellus elementum sagittis vitae et leo. Volutpat commodo sed egestas egestas fringilla phasellus. Lacus suspendisse faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis. Quam elementum pulvinar etiam non. Odio euismod lacinia at quis risus sed.</p>

          {/* Cutting liposum for client */}

          <p>Sed velit dignissim sodales ut eu sem. Posuere morbi leo urna molestie at elementum eu facilisis sed. Eu nisl nunc mi ipsum faucibus vitae aliquet. Volutpat est velit egestas dui id ornare.</p>

          <p>Pellentesque pulvinar pellentesque habitant morbi. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.</p>

          <img src={placeholder} alt="group of 9 people smiling" className="paragraph__img" />
        </div>

        <div className="paragraph__column-two">
          <p>Quam viverra orci sagittis eu volutpat odio facilisis. Mi proin sed libero enim sed faucibus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. </p>

          <p>Nibh nisl condimentum id venenatis a condimentum vitae. Vel eros donec ac odio tempor orci. Consectetur lorem donec massa sapien faucibus et. Lacinia quis vel eros donec. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. A arcu cursus vitae congue mauris rhoncus aenean vel.</p>

          <p>Lacinia at quis risus sed vulputate odio. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Senectus et netus et malesuada fames ac turpis. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eu turpis egestas pretium aenean pharetra magna ac placerat.</p>
        </div>
      </div>
    </div>
  )
}

export default Paragraph;