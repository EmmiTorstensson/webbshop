$(document).ready(function(){

    let shoppingItem = localStorage.getItem('itemsAdded');
    console.log(shoppingItem);

    let qty= 1;
    shoppingItem = JSON.parse(shoppingItem);
    console.log(typeof shoppingItem);

    for (let i = 0; i < shoppingItem.length; i++) {
      $("#cart-update").after('<tr><td><img class="table-img" src="' + shoppingItem[i].img + '"></td><td>' + shoppingItem[i].title + '</td><td id="qty">' + qty + '</td><td>$' + shoppingItem[i].price +'</td></tr>')

          ;

}


//Funkar ej

$("#clear-cart").click(function() {
    $("td").remove();
    localStorage.removeItem("itemsAdded")
  });


/*
function updateCartTotal(){
let total = 0;
total = total +  shoppingItem[i].price;
document.getElementsByClassName("cart-total-price").innerText = "$" + total ;
}
*/
});