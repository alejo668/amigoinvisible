
// TODO: ordenar lista de nombres alfabeticamente

var resultData = $.getJSON("data.json", function(data){
    $.each(data.content, function(i, field){
        console.log("field: " + field);
    });
});

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
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var resultElem = document.getElementById("result");
  if (resultData[user] != null && resultData[user]["pass"] === pass) {
    resultElem.innerHTML=resultData[user]["amigo"];
  }
}
