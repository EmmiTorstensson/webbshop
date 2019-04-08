$(document).ready(function(){

    let shoppingItem = localStorage.getItem('itemsAdded');
    console.log(shoppingItem);

    let qty= 1;
    shoppingItem = JSON.parse(shoppingItem);
    console.log(typeof shoppingItem);

    for (let i = 0; i < shoppingItem.length; i++) {
        $("#cart-update").after('<tr><td><img class="table-img" src="' + shoppingItem[i].img + '"></td><td>' + shoppingItem[i].title + '</td><td id="qty">' + qty + '</td><td>$' + shoppingItem[i].price +'</td></tr>')
    }
    
    
    //Funkar ej
    
    $("#clear-cart").click(function() {
        $("td").remove();
        localStorage.removeItem("itemsAdded")
    });
    
    $("#btn-purchase").click(function(){
        validate()  
    })
    
    function validate() {
        
        if( document.myForm.fullname.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.fullname.focus() ;
            return false;
        }
        if( document.myForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
        }
        if( document.myForm.zip.value == "" || isNaN( document.myForm.zip.value ) ||
        document.myForm.zip.value.length != 5 ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
        }
        if( document.myForm.city.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
        }
        return( true );
        
    }
    
}); // READY