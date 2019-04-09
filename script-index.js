$(document).ready(function(){
    
    // Skapar ett XMLHttpRequest-object
    let xhr = new XMLHttpRequest();
        xhr.onload = function() {

        // 200 betyder att allt fungerar som det ska
       if(xhr.status === 200){

        // Konverterar JSON-sträng till ett JavaScript objekt
        responseObject = JSON.parse(xhr.responseText);
    
           let newContent = ""; // Tom sträng som fylls på med ny HTML
        
           // Fyller vår tomma sträng med innhåll från JSON-fil
           for (let i = 0; i < responseObject.items.length; i++) {
               newContent += '<div class="items">';
               newContent +='<p class="bold-text"><b>' + responseObject.items[i].title + '</b><br>';
               newContent += '<img id="img" class="shadow p-3 mb-5 bg-white rounded" src="'+ responseObject.items[i].img + '" ';
               newContent += 'alt="' + responseObject.items[i].title + '" /> <br>$'+ responseObject.items[i].price + '</p> <button id="' + responseObject.items[i].id + '" class="add btn btn-outline-warning btn-lg">köp <i class="fas fa-cart-arrow-down"></i></button>';
               newContent += '<div>';
           }
           
           // skriver newContent i den tag med id content
           document.getElementById('content').innerHTML = newContent;
       }
    
       // Tom array som sedan fylls med vårat object hämtat från JSON-fil
       let itemsAdded = [];
       let qty = 0;
    
    // klickevent för de knappar som skriv ut i newContent
     $(".add").click(function(){

            // Hämtar ID:et på den knapp som trycks och sparar i variabel id
           let id = this.id;

           // Kollar så att det inte ligger något i "kundvagnen"
           if(qty === 0){
            
            // Objekt med rätt id läggs in i array 
           itemsAdded.push(responseObject.items[id])
            
           // Loop som skriver ut aktuelt objekt i div med id cart-update
           for (let i = 0; i < itemsAdded.length; i++) {
               qty++
               $("#cart-update")
               .after('<tr><td><img class="table-img" src="' + 
               itemsAdded[i].img + '"></td><td>' + 
               itemsAdded[i].title + '</td>'+ '<td id="qty">' + 
               qty + '</td>' + '<td>$' + 
               itemsAdded[i].price +'</td><td><button class="btn-danger" id="ta-bort">Ta bort</button></td></tr>')
               }

               // Omvandlar JS-objekt till sträng
               // sparar sträng i local storage
               let myJson = JSON.stringify(itemsAdded)
                localStorage.setItem('itemsAdded', myJson)
           }
           // Om kundvagnen är full meddelas kunden detta
           else{
               alert("OBS! You can only buy one product at a time")
           }   
        })   
        
        // Klickevent som tömmer alla td i vår tabell
        // tömmer även Local Storage
        // Tömmer Array och sätter qty till 0
        $('#ta-bort').click(function(){
            $("this").parent().parent().remove()
                itemsAdded.length = 0;
                qty = 0;
                localStorage.removeItem("itemsAdded")
                console.log("knapp");
        })
    }; // onload
    
    xhr.open('GET', 'items.json', true);
    xhr.send(null);
    

    
    }) // READY
