var modal = document.getElementById("educationModal");
var span = document.getElementsByClassName("close")[0];
var cards = document.getElementsByClassName("education-card");

for (var i = 0; i < cards.length; i++) {
  cards[i].onclick = function() {
    var imgSrc = this.getElementsByTagName("img")[0].src;
    var modalContent = `
      <img src="${imgSrc}" alt="Education Image" style="width: 90%; border-radius: 5px; margin-top: 5px;">
    `;
    document.getElementById("modal-info").innerHTML = modalContent;
    modal.style.display = "block";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
