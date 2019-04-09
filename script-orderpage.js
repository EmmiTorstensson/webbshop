$(document).ready(function(){

    let shoppingItem = localStorage.getItem('itemsAdded');

    let qty= 1;
    shoppingItem = JSON.parse(shoppingItem);
   // console.log(typeof shoppingItem);

    for (let i = 0; i < shoppingItem.length; i++) {
      $("#cart-update").after
      ('<tr><td><img class="table-img" src="'+ shoppingItem[i].img + '"></td><td>' + shoppingItem[i].title + '</td><td id="qty">' + qty + '</td><td>$' + shoppingItem[i].price +'</td><td><button id="clear-cart">Clear Cart</button></button></tr>')}

$("#clear-cart").click(function() {
    $("td").remove();
    localStorage.removeItem("itemsAdded")
  });   

$('#submit').click(function(event){
    console.log('click button');

    let name = $('#name').val()
    let email = $('#email').val()
    let phone = $('#phone').val()
    let streetname = $('#streetname').val()
    let zip = $('#zip').val()
    let city = $('#city').val()
    let statusElm = $('.status')
    statusElm.empty()

    if( name === ""){
        statusElm.append("<div>Please enter name!</div>");
        event.preventDefault()
    }

    if(!email.includes('@') || !email.includes('.')){
        statusElm.append('<div>Email is  not valid</div>')
        event.preventDefault()
    } 

    if(phone.length != 10){
        statusElm.append('<div>Enter valid phonenumber</div>')
        event.preventDefault()
    }

    if(streetname === ""){
        statusElm.append('<div>Please enter streetname</div>')
        event.preventDefault()
    }

    if(zip.length != 5){
        statusElm.append('<div>Zip is not valid!</div>')
        event.preventDefault()
    }
    if(city === ""){
        statusElm.append('<div>Enter city name!')
        event.preventDefault()
    }    

})
 
}); // READY