
// use your own url copied from Postman
let myCity = ""
let myURL2 = ""

function onXHRLoad2() {
    let messages = ""
    let apiStation = JSON.parse(this.responseText)
    console.log(apiStation)
    for (i = 0; i < 3; i++) {
    console.log('${apiStation.results[0].name}')
    console.log('${apiStation.results[0].rating}')
    console.log('${apiStation.results[0].price_level}')
    console.log('${apiStation.results[0].vicinity}')
    
    messages = messages + "Name: "+ apiStation.results[i].name+ "\n"+ "Rating: "+ apiStation.results[i].rating+ "\n"+ "Price Level: " +apiStation.results[i].price_level+ "\n"+ "Vicinity: "+ apiStation.results[i].vicinity + "\n" + "\n"

    console.log(messages)
    }
    txtResults.value = messages


}

function callAPI2(URL2) {
    var xhttp2 = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp2.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL2)
    
    // if you DON'T need cors use this code
    //xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    

    xhttp2.setRequestHeader('key','AIzaSyDocXRyXouIOjhS3TONyudZmHUOgrEof3Y')
    xhttp2.setRequestHeader('query','gas stations in "city"')
    xhttp2.setRequestHeader('keyword','address')
    xhttp2.setRequestHeader('minprice','0')
    xhttp2.setRequestHeader('maxprice','4')
  


    // make the API request
    xhttp2.addEventListener('load', onXHRLoad2)
    xhttp2.send()
}


btnSeeGasStations.onclick=function(){
// call the API calling code above 
  myCity = inpCityName.value
  myURL2 = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=gas+stations+in"+myCity+"&key=AIzaSyDocXRyXouIOjhS3TONyudZmHUOgrEof3Y&minprice=0&maxprice=4&keyword=address"
  callAPI2(myURL2)
}

btnPrices4.onclick=function(){
  ChangeForm(realTimePrices)
}

btnWeatherPage.onclick=function(){
  ChangeForm(weather)
}

btnFavoritesPage.onclick=function(){
  ChangeForm(favorites)
}
