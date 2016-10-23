var resultData = {};
window.onload = function(){
  var names = [];
  $.getJSON( "data.json", function( data ) {
    $.each( data, function( key, val ) {
      resultData[key] = val;
      names.push(key);
    });

    names.sort();
    var select = document.getElementById("users");
    for (var i = 0, len = names.length; i < len; i++) {
      var option = document.createElement("option");
      option.text = names[i];
      option.value = names[i];
      select.appendChild(option);
    }
  });
}

var form = document.getElementById("search-result");
// form.noValidate = true;
form.onsubmit = function() {return false;};

var button = document.getElementById("send");
button.addEventListener("click", function () {
  showResult();
});
button.addEventListener("touchend", function () {
  showResult();
});

var showResult = function() {
  var user = document.getElementById("users").value;
  var pass = document.getElementById("pass").value;
  var resultElem = document.getElementById("result");
  if (resultData[user] != null && resultData[user].password === pass) {
    resultElem.innerHTML=resultData[user].amigo;
  }
}
