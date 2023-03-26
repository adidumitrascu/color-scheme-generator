fetch(`https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome&count=5`)
    .then(Response => Response.json())
    .then(data => console.log(data))
  
  
  