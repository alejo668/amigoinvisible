
// TODO: ordenar lista de nombres alfabeticamente

var resultData = {
  "alejo": {pass:"YGGJO", amigo:"mcarmen"},
  "mcarmen": {pass:"YGGJO", amigo:"mcarmen"},
  "antonio": {pass:"YGGJO", amigo:"mcarmen"},
  "cristian": {pass:"YGGJO", amigo:"mcarmen"},
  "david": {pass:"YGGJO", amigo:"mcarmen"},
  "encarnita": {pass:"YGGJO", amigo:"mcarmen"},
  "jose": {pass:"YGGJO", amigo:"mcarmen"},
  "mjose": {pass:"YGGJO", amigo:"mcarmen"},
  "alberto": {pass:"YGGJO", amigo:"mcarmen"},
  "sonia": {pass:"YGGJO", amigo:"mcarmen"},
  "jesus": {pass:"YGGJO", amigo:"mcarmen"},
  "loli": {pass:"YGGJO", amigo:"mcarmen"},
  "mari": {pass:"YGGJO", amigo:"mcarmen"}
};

var form = document.getElementById("search-result");
// form.noValidate = true;
form.onsubmit = function() {return false;};

var button = document.getElementById("send");
button.addEventListener("click", function () {
  showResult();
});

// TODO: button.addEventListener("touchend", findParticipant);

var showResult = function() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var resultElem = document.getElementById("result");
  if (resultData[user] != null && resultData[user]["pass"] === pass) {
    resultElem.innerHTML=resultData[user]["amigo"];
  }
}
