import React from "react";
import "./individualStories.css";
import meportrait from '../Images/portraitgirl.jpg';

const IndividualStories = () => {
  return (
    <div className="individualStories__container">
      <div className="individualStories__navbar">
        <a class="navlist active" href="#home">
          Home
        </a>
        <a className="individualStories__navlist" href="#counties">
          Counties
        </a>
        <a className="individualStories__navlist" href="#link">
          link
        </a>
        <a className="individualStories__navlist" href="#link">
          link
        </a>
      </div>
      <div className="individualStories__innerContent">
      <img className="individualStories_studentPicture" src={meportrait} alt="student" />
        <div className="individualStories__nameDetailsBox">
          <div className="individualStories__nameAgeCountry">
            <h2 className="individualStories__details">Name:</h2>
            <h2 className="individualStories__details"> Age: </h2>
            <h2 className="individualStories__details"> County: </h2>
          </div>
          <div className="individualStories__jobPlacement">
            <h2 className="individualStories__details"> SYEP Job Placement: </h2>
            <h2 className="individualStories__details">Job title:</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            erat nisl, congue in fringilla eu, suscipit eget neque. Proin
            placerat pellentesque nibh sed facilisis. Nam nec diam urna.
            Curabitur nec pharetra orci. Suspendisse potenti. Aliquam erat
            volutpat. Nam ullamcorper eget erat sit amet elementum. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Aliquam tempus lacus neque, vel euismod ex rhoncus
            at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed mi risus, luctus eu justo nec, viverra
            tempor tortor. Nunc non ex fermentum, ornare enim eget, tincidunt
            est. Quisque varius hendrerit tellus, et consequat libero faucibus
            sit amet. Aliquam sit amet volutpat risus, et accumsan sapien. Donec
            vel ultricies purus. In hac habitasse platea dictumst. Integer id
            venenatis mauris. Phasellus suscipit ex eget luctus bibendum. Donec
            blandit, purus id interdum aliquam, urna nibh ornare neque, in
            consectetur dolor ante in dui. Nunc sed augue at risus fermentum
            dignissim nec nec sem. Suspendisse potenti. Aenean dolor velit,
            aliquet in dapibus at, mollis at metus. Nam at nulla sed sem euismod
            tincidunt quis id eros. Integer mi mauris, rutrum non velit eu,
            maximus maximus enim. Nullam sed condimentum nisi. Praesent posuere
            erat ut turpis viverra dignissim. Suspendisse sodales blandit justo
            sed pharetra. Nullam ante mi, rutrum quis pharetra quis, consequat
            eu sem. Phasellus nisi massa, faucibus sed volutpat et, rhoncus sit
            amet arcu. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualStories;
