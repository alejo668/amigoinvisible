var participantsList = ["mari", "alejo", "elena", "mcarmen", "antonio", "cristian", "david", "encarnita", "jose", "mjose", "alberto", "sonia", "jesus", "loli"];

var participantsData = {
  "mari": {group: 0},
  "alejo": {group: 1},
  "elena": {group: 1},
  "mcarmen": {group: 2},
  "antonio": {group: 2},
  "cristian": {group: 3},
  "david": {group: 3},
  "encarnita": {group: 3},
  "jose": {group: 4},
  "mjose": {group: 4},
  "alberto": {group: 5},
  "sonia": {group: 5},
  "jesus": {group: 6},
  "loli": {group: 6}
};

var form = document.getElementById("generator");
form.onsubmit = function() {return false;};

var button = document.getElementById("generate-json");
button.addEventListener("click", function () {
  generateResults();
});
button.addEventListener("touchend", function () {
  generateResults();
});

var generateResults = function() {
  var participantsAssigned = [];
  for (var key in participantsData) {
    var participant = participantsData[key];

    var notAssigned = true;
    while (notAssigned) {
      var randomAsigneeName = participantsList[Math.floor(Math.random() * participantsList.length)];
      var randomAsignee = participantsData[randomAsigneeName];

      if (randomAsigneeName !== key && randomAsignee.group !== participant.group && participantsAssigned.indexOf(randomAsigneeName) === -1) {
        participantsAssigned.push(randomAsigneeName);
        participant.password = Math.random().toString(36).slice(-5).toUpperCase();
        participant.amigo = randomAsigneeName;
        notAssigned = false;
      }
    }
  }

  var resultElem = document.getElementById("result-json");
  resultElem.innerHTML="<br>" + JSON.stringify(participantsData);
}
