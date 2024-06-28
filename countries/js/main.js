let elCountriesList = document.querySelector(".countries-list");
let elSelect = document.querySelector(".country-select")
let elSearchInput = document.querySelector(".search-input")

function renderCountries(arr, list){
    list.innerHTML = "";
    arr.forEach(value => {
        let elItem = document.createElement("li")
        let elImg = document.createElement("img")
        let elName = document.createElement("h2")
        let elCapital = document.createElement("p")
        let elPopulation = document.createElement("p")
        let elIdTag = document.createElement("span")
        
        let actionBtnWrapper = document.createElement("div")
        let elLikeButton = document.createElement("button")
        let elBasketButton = document.createElement("button")
        let elMoreButton = document.createElement("button")

        elItem.className = "w-[350px] p-2 bg-slate-300 rounded-[10px]"

        elImg.src = value.flag
        elImg.width = "100%"
        elImg.height = "250"
        elImg.className = "w-[100%] h-[250px] rounded-[10px]"


        elName.textContent = "Country: " + value.name
        elCapital.textContent = "Capital: " + value.capital
        elPopulation.textContent = "Population: " + value.population
        elIdTag.textContent = value.id


        actionBtnWrapper.className = "flex items-center gap-[5px]"
        elLikeButton.innerHTML = `
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="red"/>
        </svg>
        `
        elLikeButton.className = "p-2 bg-gray-600 rounded-[10px] text-white block"
        
        elBasketButton.innerHTML = `
        <svg fill="blue" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <path d="M410.9,0H85.1C72.3,0,61.8,10.4,61.8,23.3V512L248,325.8L434.2,512V23.3C434.2,10.4,423.8,0,410.9,0z"/>
        </svg>
        ` 
        elBasketButton.className = "p-2 bg-gray-600 rounded-[10px] text-white"
        
        elMoreButton.innerHTML = `
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#080341"/>
        </svg>
        `
        elMoreButton.className = "p-2 bg-gray-600 rounded-[10px] text-white flex items-center justify-center"

        actionBtnWrapper.append(elLikeButton, elBasketButton, elMoreButton)
        elItem.append(elImg, elName, elCapital, elPopulation, elIdTag, actionBtnWrapper)
        list.append(elItem)
    });
}
renderCountries(countries, elCountriesList)

countries.forEach(value => {
    let elOption = document.createElement("option")
    elOption.innerHTML = `${value.name} -  ${value.capital}`
    elOption.setAttribute("value", value.capital)
    elSelect.append(elOption)
})


elSelect.addEventListener("change", (evt) => {
    if(evt.target.value == "All") {
        renderCountries(countries, elCountriesList)
    }
    else {
        const selectedList = countries.filter(item => item.capital == evt.target.value)
        renderCountries(selectedList, elCountriesList)
    }
})


elSearchInput.addEventListener("keyup", (evt) => {
    const searchValue = evt.target.value;
    if(Number(searchValue)) {
        const searchedList = countries.filter(item => item.population.includes(searchValue.trim()))
        renderCountries(searchedList, elCountriesList)
    }
    else {
        const searchedList = countries.filter(item => item.name.toLowerCase().includes(searchValue.trim().toLowerCase()))
        renderCountries(searchedList, elCountriesList)
    }
})