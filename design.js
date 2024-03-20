var list = [0, 1, 2, 3, 4, 6, "w"];
var teams = ["srh", "csk"];
var num = list.ri;
var team1 = 0;
var w1 = 0;
var team2 = 0;
var w2 = 0;
var countball1 = 1;
var countball2 = 1;
var p1scores = [];
var p2scores = [];
var i = 0;
var j = 0;
var battingfirst = false;
var rtoss = teams[Math.floor(Math.random() * 2)];
var rtoss1 = rtoss;
console.log(rtoss);
function toss() {
  if ((rtoss1 = "srh")) {
    document.getElementById("battingteam").textContent =
      "Toss " + rtoss + " Winner";
    superover();
  } else {
    document.getElementById("battingteam").textContent =
      "Toss" + rtoss + "Winner";
    superover();
  }
}
function superover() {
  if (rtoss == "srh") {
    document.getElementById("battingteam").textContent = "SRH Batting";
    bat();
  } else {
    document.getElementById("battingteam").textContent = "CSK Batting";
    bat2();
  }
}
function bat() {
  if (team1 > team2 && team2!= 0) {
    res();
  } else {
    if (countball1 < 7 && w1 < 2) {
      document.getElementById("battingteam").textContent = "SRH Batting";
      var ri = list[Math.floor(Math.random() * 7)];
      console.log(ri);
      p1scores.push(ri);
      var p1_score = document.getElementById("tms1").children;
      p1_score[i].textContent = ri;
      if (ri == "w") {
        w1++;
      } else {
        team1 += ri;
        document.getElementById("teamscore1").textContent = team1;
      }
      countball1++;
      i++;
    } else {
      rtoss = "csk";
      if (team2 != 0) 
      res();
    }
  }
}

function bat2() {
  document.getElementById("battingteam").textContent = "CSK Batting";
  if (team1 < team2 && team1 != 0) {
    res();
  } else {
    if (countball2 < 7 && w2 < 2) {
      var ri = list[Math.floor(Math.random() * 7)];
      console.log(ri);
      p2scores.push(ri);
      var p2_score = document.getElementById("tms2").children;
      p2_score[j].textContent = ri;
      if (ri == "w") {
        w2++;
      } else {
        team2 += ri;
        document.getElementById("teamscore2").textContent = team2;
      }
      countball2++;
      j++;
    } else {
      rtoss = "srh";
      if (team1 != 0) 
      res();
    }
  }
}
function res() {
  if (team1 > team2) {
    document.getElementById("res").textContent = "SRH Wins";
  } else if (team1 < team2) {
    document.getElementById("res").textContent = "CSk Wins";
  } else {
    document.getElementById("res").textContent = "Draw Match!!!!";
  }
}
