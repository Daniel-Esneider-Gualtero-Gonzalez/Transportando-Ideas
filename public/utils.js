export const createItemTransport = (idArticle = crypto.randomUUID(), cant = 0, textArticle = "texto del articulo a transportar", onDelete, onEdit) => {
    // ui item
    const containerItem = document.createElement("div")
    containerItem.id = idArticle
    containerItem.className = "item-transport-container"
    const buttonMenu = document.createElement("button")
    buttonMenu.className = "button-menu"
    buttonMenu.type = "button"
    buttonMenu.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  `;

    const handleControlItems = () => {
        const controlsArticle = containerItem.querySelector("article")
        const computeStyle = window.getComputedStyle(controlsArticle)
        controlsArticle.classList.toggle("item-transport-container-animation")
    }
    buttonMenu.addEventListener("click", handleControlItems)

    containerItem.appendChild(buttonMenu)
    const divInfo = document.createElement("div")
    divInfo.className = "info-item"
    const info = document.createElement("div")
    info.className = "info"
    const spanCant = document.createElement("span")
    spanCant.textContent = cant
    const textarticle = document.createElement("p")
    textarticle.textContent = textArticle

    info.appendChild(spanCant)
    info.appendChild(textarticle)
    divInfo.appendChild(info)

    const controlItem = document.createElement("article")
    controlItem.className = "controles-item "
    const btnEdit = document.createElement("button")
    btnEdit.type = "button"
    btnEdit.textContent = "Editar"
    btnEdit.addEventListener("click", () => {
        onEdit()
        handleControlItems()
    })
    const btnDelete = document.createElement("button")
    btnDelete.type = "button"
    btnDelete.textContent = "Eliminar"
    btnDelete.addEventListener("click", onDelete)

    controlItem.appendChild(btnEdit)
    controlItem.appendChild(btnDelete)
    divInfo.appendChild(controlItem)

    containerItem.appendChild(divInfo)
    return containerItem
}

let idInterval = null
export const typeWriter = (element, text = "Hola mundo", speed = 50, requestFrame = false) => {
    if(idInterval) clearInterval(idInterval)
    const elementToInsert = element
    if(!elementToInsert) throw new Error("El elemento de inserccion de texto no se encontro");
    elementToInsert.innerHTML = ""
    const textToInsert = text
    let indexCurrent = 0
    let cantCharacters = textToInsert.length - 1

    idInterval = setInterval(() => {
        if (indexCurrent <= cantCharacters === false) {
            // se acabaron los caracters por escribir
            return clearInterval(idInterval)
        }
        let currentText = elementToInsert.textContent
        currentText += textToInsert[indexCurrent]
        elementToInsert.textContent = currentText
        indexCurrent++

    }, speed)

}