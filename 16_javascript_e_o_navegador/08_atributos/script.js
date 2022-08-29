let a = document.querySelector("footer a");

console.log(a.getAttribute("href"));

let aLink = "https://www.horadecodar.com.br";

a.setAttribute("href", aLink);

console.log(a.getAttribute("href"));
