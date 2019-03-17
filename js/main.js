var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var listing = (JSON.parse(this.responseText)).listing;
    var tBody = document.getElementById("tBody");
    console.log(tBody);
    for (var i = 0; i < listing.length; i++) {
      var tr = document.createElement("tr");
      tBody.appendChild(tr);
      for (var property in listing[i]) {
        // if (listing[i].hasOwnProperty(property)) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = listing[i][property];
        // }
      }
    }
  }
};
xhttp.open("GET", "listing.json", true);
xhttp.send();
