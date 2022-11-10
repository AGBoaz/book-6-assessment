import { getAuthors, setAuthor, getHoldInfo } from "./dataAccess.js";

export const authorSelect = () => {
    const authors = getAuthors()
    let holdInfo = getHoldInfo()

    let html = `
        <select class="authors" id="authors">
            <option value="">Choose Author</option>
            ${authors.map(author => {
                return `<option ${holdInfo.authorId === author.id? "selected": "" } value="${author.id}">${author.name}</option>`}).join("")
            }
        </select>`
    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "authors") {
        const authorId = event.target.value
        setAuthor(parseInt(authorId))
    }
})