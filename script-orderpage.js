$(document).ready(function(){

    let shoppingItem = localStorage.getItem('itemsAdded');

    let qty= 1;
    shoppingItem = JSON.parse(shoppingItem);
   // console.log(typeof shoppingItem);

    for (let i = 0; i < shoppingItem.length; i++) {
      $("#cart-update").after
      ('<tr><td><img class="table-img" src="'+ shoppingItem[i].img + '"></td><td>' + shoppingItem[i].title + '</td><td id="qty">' + qty + '</td><td>$' + shoppingItem[i].price +'</td><td><button id="clear-cart">Clear Cart</button></button></tr>');

}

$("#clear-cart").click(function() {
    $("td").remove();
    localStorage.removeItem("itemsAdded")
  });
  
});