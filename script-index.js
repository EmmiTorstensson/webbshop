$(document).ready(function() {
  // Skapar ett XMLHttpRequest-object
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    // 200 betyder att allt fungerar som det ska
    if (xhr.status === 200) {
      // Kollar om det finns något sparat i localstorage, om JA omvandlar sträng till JS-objekt om inte skapa tom array.
      let itemsAdded = localStorage.getItem("itemsAdded")
        ? JSON.parse(localStorage.getItem("itemsAdded"))
        : [];
      let qty = 0;

      // Konverterar JSON-sträng till ett JavaScript objekt
      responseObject = JSON.parse(xhr.responseText);

      let newContent = ""; // Tom sträng som fylls på med ny HTML

      // Fyller vår tomma sträng med innhåll från JSON-fil
      for (let i = 0; i < responseObject.items.length; i++) {
        newContent += '<div class="items">';
        newContent +=
          '<p class="bold-text"><b>' +
          responseObject.items[i].title +
          "</b><br>";
        newContent +=
          '<img id="img" class="shadow p-3 mb-5 bg-white rounded" src="' +
          responseObject.items[i].img +
          '" ';
        newContent +=
          'alt="' +
          responseObject.items[i].title +
          '" /> <br>$' +
          responseObject.items[i].price +
          '</p> <button id="' +
          responseObject.items[i].id +
          '" class="add btn btn-outline-warning btn-lg">köp <i class="fas fa-cart-arrow-down"></i></button>';
        newContent += "<div>";
      }

      for (let i = 0; i < itemsAdded.length; i++) {
        $("#cart-update").after(
          '<tr><td><img class="table-img" src="' +
            itemsAdded[i].img +
            '"></td><td>' +
            itemsAdded[i].title +
            "</td>" +
            '<td id="qty">' +
            qty +
            "</td>" +
            "<td>$" +
            itemsAdded[i].price +
            '</td><td><button class="btn-danger" id="ta-bort">Clear Cart</button></td></tr>'
        );
      }

      // skriver newContent i den tagg med id content
      document.getElementById("content").innerHTML = newContent;

      // klickevent för de knappar som skriv ut i newContent
      $(".add").click(function() {
        // Hämtar ID:et på den knapp som trycks och sparar i variabel id
        let id = this.id;

        // Kollar så att det inte ligger något i "kundvagnen"
        if (qty === 0) {
          // Objekt med rätt id läggs in i array
          itemsAdded.push(responseObject.items[id]);
          console.log(responseObject.items[id]);
          // Omvandlar JS-objekt till sträng
          // sparar sträng i local storage
          let myJson = JSON.stringify(itemsAdded);
          localStorage.setItem("itemsAdded", myJson);

          // skriver ut aktuelt objekt i div med id cart-update
          qty++;
          $("#cart-update").after(
            '<tr><td><img class="table-img" src="' +
              responseObject.items[id].img +
              '"></td><td>' +
              responseObject.items[id].title +
              "</td>" +
              '<td id="qty">' +
              qty +
              "</td>" +
              "<td>$" +
              responseObject.items[id].price +
              '</td><td><button class="btn-danger" id="ta-bort">Clear Cart</button></td></tr>'
          );
        }
        // Om kundvagnen är full meddelas kunden detta
        else {
          alert("OBS! You can only buy one product at a time");
        }

        // Klickevent som tömmer alla td i vår tabell
        // tömmer även Local Storage
        // Tömmer Array och sätter qty till 0
        $("#ta-bort").click(function() {
          $(this)
            .parent()
            .parent()
            .remove();
          itemsAdded.length = 0;
          qty = 0;
          localStorage.removeItem("itemsAdded");
          console.log("knapp");
        });
      });
    }
  }; // onload

  xhr.open("GET", "items.json", true);
  xhr.send(null);
}); // READY
