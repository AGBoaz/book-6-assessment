const applicationState = {
    authors: [],
    recipiants: [],
    letters: [],
    holdInfo: {}
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

// AUTHORS
export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}
export const setAuthor = (id) => {
    applicationState.holdInfo.author = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then((authorsFromApi) => { applicationState.authors = authorsFromApi })
}

// RECIPIANTS
export const getRecipiants = () => {
    return applicationState.recipiants.map(recipiant => ({ ...recipiant }))
}
export const setRecipiant = (id) => {
    applicationState.holdInfo.recipiant = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const fetchRecipiants = () => {
    return fetch(`${API}/recipiants`)
        .then(response => response.json())
        .then((recipiantFromApi) => { applicationState.recipiants = recipiantFromApi })
}

// !! LETTERS !!
export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}
export const setLetterBody = (id) => {
    applicationState.holdInfo.letterBody = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then((lettersFromApi) => { applicationState.letters = lettersFromApi })
}
export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(userLetter)
    }
    return fetch(`${API}/letters`, fetchOptions)
        .then(response=>response.json())
        .then(() => {mainContainer.dispatchEvent(new CustomEvent("stateChanged"))})
}

//holdInfo
export const getHoldInfo = () => {
    return structuredClone(applicationState.holdInfo)
}