$(document).ready(function(){

 

    // hämtar sträng från LS
    let shoppingItem = localStorage.getItem('itemsAdded');

    let qty= 1;

    // Omvandlar sträng till JS-objekt
    shoppingItem = JSON.parse(shoppingItem);

    // Kollar ifall det finns ett objekt i LS
    // Skriver isf ute i div med id "cart-update"
    if(window.localStorage.length === 1){
    for (let i = 0; i < shoppingItem.length; i++) {
      $("#cart-update").after
      ('<tr><td><img class="table-img" src="'+ shoppingItem[i].img + '"></td><td>' + shoppingItem[i].title + '</td><td id="qty">' + qty + '</td><td>$' + shoppingItem[i].price +'</td><td><button id="clear-cart">Clear Cart</button></button></tr>')}
    } 
    // Om LS är tomt skrivs meddelande ut
    // Formulär göms 
    else{ 
        $('#cart-container').hide()
        $('.empty-msg').show()
        $('form').hide(500)
    }

    // Tömmer kundvagn, LS vi klick
    // Visar meddelande och döljer formulär
$("#clear-cart").click(function() {
    $("td").remove();
    localStorage.removeItem("itemsAdded")
        $('#cart-container').hide()
        $('.empty-msg').show()
        $('form').hide()
  });   


// Validering av formulär vid klick
$('#submit').click(function(event){

    // Sparar ner värderna från input i variabler
    let name = $('#name').val()
    let email = $('#email').val()
    let phone = $('#phone').val()
    let streetname = $('#streetname').val()
    let zip = $('#zip').val()
    let city = $('#city').val()
    let statusElm = $('#status')
    statusElm.empty()

    // If sats kollar varje input
    if( name === ""){

        // Om namnfält lämnas tomt skrivs felmeddelande ut
        statusElm.append("<div>Please enter name!</div>");
        // Om namnfällt lämnas tomt hindras eventet som är att skicka formuläret att ske
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