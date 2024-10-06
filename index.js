var userinput = prompt(`Enter Current Any One Weather :  \n\n eg : \n Hot \n Cold \n Fall \n Cloudy \n Rainy \n `)
    // ----------------- 
if(userinput === "Hot" ){
     document.write(`<div class="card mx-auto "  style="width: 18rem; ">
      <img src="./assest/image/hot.jpeg " class="card-img-top" alt="..." style="height:250px;">
      <div class="card-body">
        <h3 class="card-title text-center text-warning">🌞 Hot Weather 🌞</h3>
        <p class="card-text text-center ">If the weather outside or the temperature inside is very hot, you can use the adjectives scorching, blistering, or sweltering.</p>
      </div>
    </div>`)
} 
    // ------------------------- COLD----------
  else if(userinput === "Cold"  ){
    document.write(`<div class="card mx-auto "  style="width: 18rem; ">
      <img src="./assest/image/cold.jpeg " class="card-img-top" alt="..." style="height:250px;">
      <div class="card-body">
        <h3 class="card-title text-center text-primary">❄️ Cold Weather ❄️</h3>
        <p class="card-text text-center "> Winter has the coldest months because the Earth's tilt is away from the sun. This lowers the angle and amount of solar radiation that reaches the earth's surface..</p>
      </div>
    </div>`)
 }

   // ------------------------- FALL ----------
   else if(userinput === "Fall"  ){
    document.write(`<div class="card mx-auto "  style="width: 18rem; ">
      <img src="./assest/image/fall.jpeg " class="card-img-top" alt="..." style="height:250px;">
      <div class="card-body">
        <h3 class="card-title text-center text-danger">🍁 Fall Weather 🍁</h3>
        <p class="card-text text-center ">The weather gets colder and more windy. In Autumn the hours of daylight and the hours of night are the same. In autumn the weather changes all the time..</p>
      </div>
    </div>`)
 }

    // ------------------------- RAINY ----------
    else if(userinput === "Rainy"  ){
      document.write(`<div class="card mx-auto "  style="width: 18rem; ">
        <img src="./assest/image/rain.jpeg " class="card-img-top" alt="..." style="height:250px;">
        <div class="card-body">
          <h3 class="card-title text-center text-white">☔ Rainy Weather ☔</h3>
          <p class="card-text text-center ">Rainy Season is one of the four main seasons in India. It falls every year after summer, especially in July, and ends in September.</p>
        </div>
      </div>`)
   }

       // ------------------------- CLOUDY ----------
       else if(userinput === "Cloudy"  ){
        document.write(`<div class="card mx-auto "  style="width: 18rem; ">
          <img src="./assest/image/cloudy.jpeg " class="card-img-top" alt="..." style="height:250px;">
          <div class="card-body">
            <h3 class="card-title text-center text-primary">☁️ Cloudy Weather ☁️</h3>
            <p class="card-text text-center ">  Clouds in the sky rain when monsoon occurs. In the summer, it becomes too hot, and water from the water resources like Ocean, rivers, etc., goes up in the sky as vapors.</p>
          </div>
        </div>`)
     }
     else{document.write(`<h5>OPPS! Your weather is not found.</h5>
      `)}