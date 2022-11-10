import { fetchAuthors, fetchRecipiants } from "./dataAccess.js";
import { assembly } from "./preMain.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    .then(() => fetchRecipiants())
    .then(() => mainContainer.innerHTML = assembly())
    
}

render()