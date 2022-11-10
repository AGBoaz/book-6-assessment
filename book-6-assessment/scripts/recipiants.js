import { getRecipiants, setRecipiant, getHoldInfo } from "./dataAccess.js";

export const recipiantSelect = () => {
    const recipiants = getRecipiants()
    let holdInfo = getHoldInfo()
    let html = `
        <select class="recipiants" id="recipiants">
            <option value="">Choose Recipiant</option>
            ${recipiants.map(recipiant => {
                return `<option ${holdInfo.recipiantId === recipiant.id? "selected": "" } value="${recipiant.id}">${recipiant.name}</option>`}).join("")
            }
        </select>`
    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "recipiants") {
        const recipiantId = event.target.value
        setRecipiant(parseInt(recipiantId))
    }
})