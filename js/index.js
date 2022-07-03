const card = document.querySelectorAll(".card")
const country = document.querySelectorAll(".country_trip")
card.forEach(function(value, index) {
    value.addEventListener("click", function(){
        var destination = document.querySelector(".destination")
        destination.innerText = country[index].innerText
        destination.style.opacity = "1"
    })
})