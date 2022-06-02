const btn = document.querySelector("button");
const img = document.querySelector("img");

const URL = "https://dog.ceo/api/breeds/image/random";

function fechApi() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => img.setAttribute("src", data.message))
    .catch((err) => console.error(err));
}
btn.addEventListener("click", fechApi);

fechApi();

const usersAge = [20, 21, 23, 43];
