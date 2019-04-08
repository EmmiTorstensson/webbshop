$(document).ready(function(){
    console.log("test");
    
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
       if(xhr.status === 200){
           responseObject = JSON.parse(xhr.responseText);
    
           let newContent = ""; // Tom sträng som fylls på med nu HTML
    
           for (let i = 0; i < responseObject.items.length; i++) {
               newContent += '<div class="items">';
               newContent +='<p><b>' + responseObject.items[i].title + '</b><br>';
               newContent += '<img class=" img-thumbnail" src="'+ responseObject.items[i].img + '" ';
               newContent += 'alt="' + responseObject.items[i].title + '" /> <br>$'+ responseObject.items[i].price + '</p> <button id="' + responseObject.items[i].id + '" class="add btn btn-outline-warning btn-lg">köp <i class= "fas fa-cart-arrow-down"></i></button>';
               newContent += '<div>';
           }
    
           document.getElementById('content').innerHTML = newContent;
       }
    
    
    
       // Pushar shopping till en array
       let itemsAdded = [];
       let qty = 0;
    

     $(".add").click(function(){


         /*
        let id = this.id;
        itemsAdded.push(responseObject.items[id])
        let myJson = JSON.stringify(itemsAdded)
        localStorage.setItem('itemsAdded', myJson)

        let storedValue = localStorage.getItem('itemsAdded')

        storedValue = JSON.parse(storedValue);

        if(qty === 0){
            for (let i = 0; i < storedValue.length; i++) {
                qty++
                $("#cart-update").after('<tr><td><img class="table-img" src="'+ storedValue[i].img + '"></td><td>' + storedValue[i].title + '</td><td id="qty">' + qty + '</td><td>$' + storedValue[i].price +'</td><td><button id="clear-cart">Clear Cart</button></button></tr>');
    
         } }else{
    
            alert("OBS! You can only buy one product at a time")
          }
        
*/
    
           let id = this.id;
    
           if(qty === 0){
    
           itemsAdded.push(responseObject.items[id])
    
           for (let i = 0; i < itemsAdded.length; i++) {
               qty++
               $("#cart-update").after('<tr><td><img class="table-img" src="' + itemsAdded[i].img + '"></td><td>' + itemsAdded[i].title + '</td>'+ '<td id="qty">' + qty + '</td>' + '<td>$' + itemsAdded[i].price +'</td><td><button class="btn-danger" id="ta-bort">Ta bort</button></td></tr>')
               }
           }
           else{
               alert("OBS! You can only buy one product at a time")
           }
    
           console.log(itemsAdded);
    
           $('#ta-bort').click(function(){
               $(this).parent().parent().remove()
                   itemsAdded.length = 0;
                   qty = 0;
                   localStorage.removeItem("itemsAdded")
           })
    
           let myJson = JSON.stringify(itemsAdded)
           console.log(myJson);
           localStorage.setItem('itemsAdded', myJson)
           console.table(localStorage)
       })
    
       let storedValue = localStorage.getItem('itemsAdded')
       console.log(storedValue);
    
   
    
    }; // onload
    
    xhr.open('GET', 'items.json', true);
    xhr.send(null);
    
    
    }) // READY
