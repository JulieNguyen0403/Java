let req3 = ""
let req2 = ""
let query3 = ""
//let pw = "Chicken21!"  // put your database password here
let favsList = ""
let user = ""
let gasID = ""
let query2 = ""
let results2 = ""
let gasName = ""
let query4 = ""
let req4 = ""
let message4 = ""

favorites.onshow = function(){
    query4 = "SELECT * FROM gas_station"
    req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query4)
     if (req.status == 200) { 
        allGasStations = JSON.parse(req4.responseText)
        for (i = 0; i < allGasStations.length; i++)
            message4 = message4 + allGasStations[i] + "\n"
        txtOptions.value = message4
    } else {
        txtOptions.value = `Error: ${req.status}`
    }  
}

btnSubmit.onclick=function(){
    user = inptUserName.value
    gasID = inptGasID.value
    gasName = inptGasName.value
    query3 = "INSERT INTO favorite (username, gas_id, gas_station_name) VALUES ('" + user + "', '" + gasID + "', '" + gasName + "')"
    alert("Successfully inserted")
    
    
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query3)

    if (req3.status == 200)  //transit worked
      if (req3.responseText == 500)  {  // for our server - this means the insert succeeded
        query2 = "SELECT gas_station_name FROM favorite WHERE username = " + '"' + user + '"'

        req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query2)
        
        results2 = JSON.parse(req2.responseText)
        let message = ""
        for (i=0; i < results2.length; i++) 
          message = message + results2[i] + "\n"
        txtFavs.value = message
     } else {
        txtFavs.textContent = "There was a problem adding this favorite."
        }
     else  //transit error
        alert("Error")
  }
    
        





btnPrices.onclick=function(){
  ChangeForm(realTimePrices)
}

btnMap.onclick=function(){
  ChangeForm(googleMaps)
}

butWeather.onclick=function(){
  ChangeForm(weather)
}

     
