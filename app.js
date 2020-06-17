function getInputValue() {
  var price = [],
    quantity = [],
    name = [],
    tprice = [],
    idName = [],
    idPrice = [],
    idQuantity = [],
    idTPrice = [],
    trname = [];
  var total = 0;
  var i = 0;
  for (var i = 0; i <= 9; i++) {
    price[i] = 0;
    tprice[i] = 0;
    quantity[i] = 0;
    idName[i] = "n" + (i + 1);
    idPrice[i] = "p" + (i + 1);
    idQuantity[i] = "q" + (i + 1);
    idTPrice[i] = "t" + (i + 1);
  }

  /*for (var i = 0; i < 9; i++) {
      document.write(idPrice[i]);
    }*/
  for (var i = 0; i <= 9; i++) {
    price[i] = document.getElementById(idPrice[i]).value;
    quantity[i] = document.getElementById(idQuantity[i]).value;
    name[i] = document.getElementById(idName[i]).value;
    tprice[i] = quantity[i] * price[i];
    total += tprice[i];
  }
  for (var i = 0; i <= 9; i++) {
    trname[i] = "tr" + (i + 1);
  }
  for (var i = 0; i <= 9; i++) {
    document.getElementById(idName[i]).value = name[i];
    document.getElementById(idQuantity[i]).value = quantity[i];
    document.getElementById(idPrice[i]).value = price[i];
    document.getElementById(idTPrice[i]).value = tprice[i];
    if (tprice[i] == 0) {
      document.getElementById(trname[i]).style.display = "none";
    } else {
      document.getElementById(idTPrice[i]).style.display = "block";
    }
  }
  document.getElementById("tl").style.display = "block";
  /*var hd = "p1";
    // Selecting the input element and get its value
    var inputVal = document.getElementById(hd).value;
    document.write(inputVal);

    // Displaying the value
    //alert(inputVal);*/
  total = "Total : " + total;
  document.getElementById("tl").innerHTML = total;
}
function myFunction() {
  document.getElementById("tl").style.display = "none";
  var idTPrice = [];
  var trname = [];
  for (var i = 0; i <= 9; i++) {
    idTPrice[i] = "t" + (i + 1);
    document.getElementById(idTPrice[i]).style.display = "none";
  }
  for (var i = 1; i <= 9; i++) {
    trname[i] = "tr" + (i + 1);
    document.getElementById(trname[i]).style.display = "none";
  }
}
function unhide(idbtnp, trn) {
  document.getElementById(idbtnp).style.display = "none";
  document.getElementById(trn).style.display = "flex";
}
