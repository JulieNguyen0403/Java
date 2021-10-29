
//Login form

let req = ""
let query = ""
let pw = "Chicken21!"  // put your database password here
let userList = ""


login.onshow=function(){
   txtLogin_contents.style.height = "100px"
}

login.onshow=function(){
    query = "Select * FROM user"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

    if (req.status == 200){ //transit worked.
        userList = JSON.parse(req.responseText)
    }else{
        // transit error
        lblDel = `Error: ${req.status}`
    }  
}


btnLogIn.onclick=function(){
    let username= inptUsername.value
    let password = inptPassword.value
    // make sure the customer name is in the database before you try to delete it
    let found = ""
    for (i = 0; i <= userList.length - 1; i++) {
        if (username === userList[i][0] && password === userList[i][1]){
            found = true
            break // if found the item in the database jump out of loop
        }else{
            found = false
    }
  }
    if (found == false) 
       NSB.MsgBox(`You do not have an account.`)
    else if (found == true) {
      ChangeForm(favorites)
      } // found isi true
}




btnCreate.onclick=function(){
    let username= inptUsername2.value
    let password = inptPassword2.value
    let email = inptEmail.value
    let query = "INSERT INTO user (username,password,email) VALUES ('"+ username + "', '" + password+ "', '" + email+ "')"
    // look at how the query is rendered
    //alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            NSB.MsgBox(`You have successfully created an account!`)
        else
            NSB.MsgBox(`You already have an account.`)
    } else 
        // transit error
        NSB.MsgBox(`Error: ${req.status}`)
}

document.write( '<!DOCTYPE html>\n' );
document.write( '<html lang=\"en\">\n' );
document.write( '<head>\n' );
document.write( '  <meta charset=\"UTF-8\">\n' );
document.write( '  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n' );
document.write( '  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n' );
document.write( '  <title>My Google Map</title>\n' );
document.write( '  <style>\n' );
document.write( '    #map{\n' );
document.write( '      height:75px;\n' );
document.write( '      max-width:none;\n' );
document.write( '    }\n' );
document.write( '  </style>\n' );
document.write( '</head>\n' );
document.write( '<body>\n' );
document.write( '  <h1>Gas Stations Near You</h1>\n' );
document.write( '  <div id=\"map\"></div>\n' );
document.write( '  <script>\n' );
document.write( '    function initMap(){\n' );
document.write( '      // Map options\n' );
document.write( '      var options = {\n' );
document.write( '        zoom:13,\n' );
document.write( '        center:{lat:41.2565,lng:-95.9345}\n' );
document.write( '      }\n' );
document.write( '\n' );
document.write( '      // New map\n' );
document.write( '      var map = new google.maps.Map(document.getElementById(\'map\'), options);\n' );
document.write( '\n' );
document.write( '      // Listen for click on map\n' );
document.write( '      google.maps.event.addListener(map, \'click\', function(event){\n' );
document.write( '        // Add marker\n' );
document.write( '        addMarker({coords:event.latLng});\n' );
document.write( '      });\n' );
document.write( '\n' );
document.write( '      /*\n' );
document.write( '      // Add marker\n' );
document.write( '      var marker = new google.maps.Marker({\n' );
document.write( '        position:{lat:42.4668,lng:-70.9495},\n' );
document.write( '        map:map,\n' );
document.write( '        icon:\'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\'\n' );
document.write( '      });\n' );
document.write( '\n' );
document.write( '      var infoWindow = new google.maps.InfoWindow({\n' );
document.write( '        content:\'<h1>Omaha NE</h1>\'\n' );
document.write( '      });\n' );
document.write( '\n' );
document.write( '      marker.addListener(\'click\', function(){\n' );
document.write( '        infoWindow.open(map, marker);\n' );
document.write( '      });\n' );
document.write( '      */\n' );
document.write( '\n' );
document.write( '      // Array of markers\n' );
document.write( '      var markers = [\n' );
document.write( '        {\n' );
document.write( '          coords:{lat:44.4334,lng:-96.4981},\n' );
document.write( '          iconImage:\'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\',\n' );
document.write( '          content:\'<h1>Fremont NE</h1>\'\n' );
document.write( '        },\n' );
document.write( '        {\n' );
document.write( '          coords:{lat:41.2656,lng:-95.9464},\n' );
document.write( '          content:\'<h1>Creighton University</h1>\'\n' );
document.write( '        },\n' );
document.write( '        {\n' );
document.write( '          coords:{lat:42.7762,lng:-71.0773}\n' );
document.write( '        }\n' );
document.write( '      ];\n' );
document.write( '\n' );
document.write( '      // Loop through markers\n' );
document.write( '      for(var i = 0;i < markers.length;i++){\n' );
document.write( '        // Add marker\n' );
document.write( '        addMarker(markers[i]);\n' );
document.write( '      }\n' );
document.write( '\n' );
document.write( '      // Add Marker Function\n' );
document.write( '      function addMarker(props){\n' );
document.write( '        var marker = new google.maps.Marker({\n' );
document.write( '          position:props.coords,\n' );
document.write( '          map:map,\n' );
document.write( '          //icon:props.iconImage\n' );
document.write( '        });\n' );
document.write( '\n' );
document.write( '        // Check for customicon\n' );
document.write( '        if(props.iconImage){\n' );
document.write( '          // Set icon image\n' );
document.write( '          marker.setIcon(props.iconImage);\n' );
document.write( '        }\n' );
document.write( '\n' );
document.write( '        // Check content\n' );
document.write( '        if(props.content){\n' );
document.write( '          var infoWindow = new google.maps.InfoWindow({\n' );
document.write( '            content:props.content\n' );
document.write( '          });\n' );
document.write( '\n' );
document.write( '          marker.addListener(\'click\', function(){\n' );
document.write( '            infoWindow.open(map, marker);\n' );
document.write( '          });\n' );
document.write( '        }\n' );
document.write( '      }\n' );
document.write( '    }\n' );
document.write( '  </script>\n' );
document.write( '  <script async defer\n' );
document.write( '    src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBE_Clf6rCNGDT0YRSNO7FEbwcOLFtptoE&callback=initMap\">\n' );
document.write( '    </script>\n' );
document.write( '</body>\n' );
document.write( '</html>' );
