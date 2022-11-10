import { letterForm } from "./letterForm.js";

export const assembly = () => {
    return `
        <h1>Pinpals</h1>
        <section class="letterForm">
            ${letterForm()}
        </section>`
}