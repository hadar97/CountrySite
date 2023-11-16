import Country from "./classCountry.js"

let localData = []

const init = async () => {
    let url = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,coin,borders,cca3"
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    localData = data
    ListersNav()
    listenerSearch()
}
 export const SendByName = async (nameCountry) => {
    let countryURL = `https://restcountries.com/v3.1/name/${nameCountry}`
    let mycountry
     try{
        let res = await fetch(countryURL)
        let data = await res.json()
        mycountry = data
        console.log(mycountry)
        createCountry(mycountry[0])
    }
    catch (e) {
        alert("Typing error!!")
    }
}
const ListersNav = () => {
   
    let listnerA = document.querySelectorAll(".navA")
    for (let i = 0; i < listnerA.length; i++) { 
        listnerA[i].style.cursor="pointer"
        listnerA[i].addEventListener("click", () => {
            let nameCountry = listnerA[i].innerHTML
            SendByName(nameCountry)
        }
       
        )
    }
}
const listenerSearch = () => {
    let search = document.querySelector("#search_id")
    search.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            {
                let name = search.value
                console.log(name)
                SendByName(name)
            }
        }
    })
}

const createCountry = (_arg) => {
    let _id_parent = "#id_parent"
    let country = new Country(_id_parent, _arg,findCountryByCca3,SendByName)
    country.render()
}



 export const findCountryByCca3 = (_arg) => {
    let myitem = localData
    let cca3
    for (let item of myitem) {
        if (item.cca3 == _arg)
            cca3 = item.name.common
    }
    return cca3
}
init()