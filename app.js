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
      document.getElementById(idTPrice[i]).style.display = "unset";
    }
  }
  document.getElementById("tl").style.display = "block";
  total = "Total : " + total + " /=";
  document.getElementById("tl").innerHTML = total;
  document.getElementById("refresh").style.display = "unset";
  document.getElementById("save").style.display = "unset";

  /*getFullYear()	Get the year as a four digit number (yyyy)
  getMonth()	Get the month as a number (0-11)
  getDate()	Get the day as a number (1-31)
  getHours()	Get the hour (0-23)
  getMinutes()	Get the minute (0-59)
  getSeconds()*/
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = new Date();
  var cYear = date.getFullYear();
  var cMonth = months[date.getMonth()];
  var cDate = date.getDate();
  var cDay = days[date.getDay()];
  var cHour = date.getHours();
  var cMinute = date.getMinutes();
  var cSeconds = date.getSeconds();
  console.log(date);
  if (cHour == 0) cHour += 12;
  if (cHour > 12) {
    ap = " PM";
    cHour -= 12;
  } else {
    var ap = " AM";
  }
  var fDate =
    cDay +
    " " +
    cDate +
    " " +
    cMonth +
    " " +
    cYear +
    " " +
    cHour +
    ":" +
    cMinute +
    ":" +
    cSeconds +
    ap;
  console.log(fDate);
  document.getElementById("curDate").innerHTML = fDate;
  var title;
  title = "Hisheb " + fDate;
  document.title = title;
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
  document.getElementById("refresh").style.display = "none";
  document.getElementById("save").style.display = "none";
}
function unhide(idbtnp, trn) {
  var strp, strq, strt;
  strp = "p" + idbtnp[2];
  strq = "q" + idbtnp[2];
  strt = "t" + idbtnp[2];
  var valp, valq, valt;
  valp = document.getElementById(strp).value;
  valq = document.getElementById(strq).value;
  valt = valp * valq;
  console.log(valp);
  console.log(valq);
  document.getElementById(strt).value = valt;
  document.getElementById(strt).style.display = "unset";
  document.getElementById(idbtnp).style.display = "none";
  document.getElementById(trn).style.display = "block";
}
