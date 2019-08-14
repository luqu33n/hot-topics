let url = "./partials/index.html";
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
const links = document.querySelectorAll("nav a");

function loadContent(urlValue) {

	 fetch(urlValue)
    
        .then(function (response) {
          if (response.statusText === "OK") {
              return response.text();
          }
              throw new Error(response.statusText)
          })
    
       .then(function (data) {
           container.innerHTML = data;
       })
    
       .catch(function (err) {
          errorContainer.textContent = `${err.name}: ${err.message}`;
       });
  } 

function handleClick(ev) {

	ev.preventDefault();

	let currentLink = ev.target;

	let url = currentLink.href;

	loadContent(url);
}

for (let link of links) {
	link.addEventListener("click", handleClick);
}
