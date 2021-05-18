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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mattis enim ut tellus elementum sagittis vitae et leo. Volutpat commodo sed egestas egestas fringilla phasellus. Lacus suspendisse faucibus interdum posuere lorem ipsum. Quis eleifend quam adipiscing vitae proin sagittis. Quam elementum pulvinar etiam non. Odio euismod lacinia at quis risus sed. Mauris cursus mattis molestie a iaculis. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Aenean pharetra magna ac placerat. Eu facilisis sed odio morbi quis commodo. Facilisis volutpat est velit egestas dui id ornare. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Risus in hendrerit gravida rutrum quisque non tellus orci. Eget dolor morbi non arcu risus quis. Pellentesque nec nam aliquam sem et. Vel pretium lectus quam id leo.</p>

          <p>Sed velit dignissim sodales ut eu sem. Posuere morbi leo urna molestie at elementum eu facilisis sed. Eu nisl nunc mi ipsum faucibus vitae aliquet. Volutpat est velit egestas dui id ornare. Amet dictum sit amet justo. Augue lacus viverra vitae congue eu consequat ac felis donec. Vitae proin sagittis nisl rhoncus mattis. Elementum eu facilisis sed odio. Tortor at auctor urna nunc id. Tristique nulla aliquet enim tortor. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Malesuada nunc vel risus commodo. A cras semper auctor neque vitae tempus quam pellentesque nec.</p>

          <p>Pellentesque pulvinar pellentesque habitant morbi. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Tempus iaculis urna id volutpat lacus laoreet. Consequat interdum varius sit amet mattis vulputate enim nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl. Et tortor at risus viverra adipiscing. Nisi quis eleifend quam adipiscing vitae proin. Odio aenean sed adipiscing diam donec.</p>

          <img src={placeholder} alt="group of 9 people smiling" className="paragraph__img" />
        </div>

        <div className="paragraph__column-two">
          <p>Quam viverra orci sagittis eu volutpat odio facilisis. Mi proin sed libero enim sed faucibus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Sit amet consectetur adipiscing elit. Dui faucibus in ornare quam. Condimentum lacinia quis vel eros donec ac odio. Semper quis lectus nulla at. Massa sapien faucibus et molestie. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Proin fermentum leo vel orci porta non. Venenatis tellus in metus vulputate eu.</p>

          <p>Nibh nisl condimentum id venenatis a condimentum vitae. Vel eros donec ac odio tempor orci. Consectetur lorem donec massa sapien faucibus et. Lacinia quis vel eros donec. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. A arcu cursus vitae congue mauris rhoncus aenean vel. Adipiscing bibendum est ultricies integer quis auctor. Pulvinar etiam non quam lacus. Quisque egestas diam in arcu cursus euismod. Est sit amet facilisis magna etiam tempor.</p>

          <p>Lacinia at quis risus sed vulputate odio. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Senectus et netus et malesuada fames ac turpis. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eu turpis egestas pretium aenean pharetra magna ac placerat. Arcu risus quis varius quam quisque id diam vel quam. Platea dictumst vestibulum rhoncus est. Lectus arcu bibendum at varius vel. Enim blandit volutpat maecenas volutpat blandit. Risus in hendrerit gravida rutrum. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Lectus quam id leo in vitae turpis. Eleifend mi in nulla posuere. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Mauris ultrices eros in cursus turpis massa. Scelerisque in dictum non consectetur a erat.</p>
        </div>
      </div>
    </div>
  )
}

export default Paragraph;