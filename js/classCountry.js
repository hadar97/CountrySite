// import {findCountryByCca3,SendByName} from "./countries.js"

export default class Country{
    constructor(_id_parent,_arg,findCountryByCca3,SendByName){
        this.id_parent=_id_parent
        this.flag = _arg.flags.png
        this.pop = _arg.population
        this.name = _arg.name.common
        this.region = _arg.region
        this.languages = _arg.languages
        this.capital = _arg.capital[0]
        this.currencies = _arg.currencies
        this.borders = _arg.borders
        this.myLaLat = _arg.latlng
        this.currencies = Object.values(this.currencies)
        this.currencies = Object.values(this.currencies[0])
        this.languages = Object.values(this.languages)
        this.borders?this.borders=Object.values(this.borders):this.borders=null
        this.lat= this.myLaLat[0]
        this.lan=this.myLaLat[1]
    
         this.borderDiv = document.createElement("div");
         this.borderDiv.innerHTML+=`<strong class="fw-bold">Borders:</strong> `
         this.borderDiv.className="ms-3"
         if(this.borders)
       { for (let i = 0; i < this.borders.length; i++) {
            let a = document.createElement("div")
            a.style.cursor="pointer"
            a.className="fw-light"
            a.innerHTML= findCountryByCca3(this.borders[i])
           this.borders[i]=a.innerHTML
            i==this.borders.length-1?a.innerHTML+=" .":a.innerHTML+=" ,"
            a.addEventListener("click", () => {
             SendByName(this.borders[i])
            })
           this.borderDiv.append(a)
        }}
        else{
        let a = document.createElement("div")
          a.innerHTML="no borders"
          this.borderDiv.append(a)
        }
    
    }


    render(){
        document.querySelector(this.id_parent).innerHTML = `<div class="me-3"><img  alt=${this.name} src=${this.flag} height="200px" width="300px">
        <h2 >${this.name}</h2>
        <p   class="fw-light" ><strong class="fw-bold">Pop: </strong> ${this.pop}</p>
        <p   class="fw-light"><strong class="fw-bold">Region: </strong> ${this.region}</p>
        <p    class="fw-light"><strong class="fw-bold">Capital: </strong>${this.capital}</p>
        <p    class="fw-light"><strong class="fw-bold">Languages: </strong>${this.languages}</p>
        <p   class="fw-light"><strong class="fw-bold">Currencies: </strong>${this.currencies}</p>
      </div>
        <div class="Mymap"  >
                    <iframe width="300px" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?q=${this.lat},${this.lan}&hl=es&z=4&amp;output=embed">
                    </iframe>
                   </div>  
        `
         
        document.querySelector(this.id_parent).append(this.borderDiv)
        
        
        
   }
}