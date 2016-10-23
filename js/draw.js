var participantsList = ["Mari hija","Alejo","Elena","Mari Carmen madre","Antonio","Cristian","David","Encarnita","Jose","Maria Jose","Alberto","Sonia","Jesus","Loli"];

var participantsData = {
  "Mari hija": {group: 0},
  "Alejo": {group: 1},
  "Elena": {group: 1},
  "Mari Carmen madre": {group: 2},
  "Antonio": {group: 2},
  "Cristian": {group: 3},
  "David": {group: 3},
  "Encarnita": {group: 3},
  "Jose": {group: 4},
  "Maria Jose": {group: 4},
  "Alberto": {group: 5},
  "Sonia": {group: 5},
  "Jesus": {group: 6},
  "Loli": {group: 6}
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
