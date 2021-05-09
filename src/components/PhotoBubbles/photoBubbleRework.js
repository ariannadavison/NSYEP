function AllImages() {
    

  const imageArray = require.context("../../public/foodImages/lunch/", true,/\.(png|jpe?g|svg)$/).keys();

  console.log(imageArray);

  var fileName = "";

  console.log(imageArray.length);

  const imagesRendered = imageArray.map(item => {

      fileName = item.slice(2);

      return(
          <div className="col">
              <img className="img-fluid"  src={`../foodImages/lunch/${fileName}`} />

          </div>
      ) 
  })

  return(
      <div className="container">
          <div className="row">
              {imagesRendered}
          </div>
      </div>
  );
  
}