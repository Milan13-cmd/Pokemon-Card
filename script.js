
let btn = document.querySelector("#btn")
let cards = document.querySelector("#cards")

const getRandomPokemon = () => {
      
      const randomId = Math.floor(Math.random() * 898) +1;
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response =>{
            if(!response.ok){
                  throw new Error ('could not fech data');
            }
            else{
                return response.json();
            }
        }) 
        .then(data => {
          setTimeout(() => {
              console.log(data.types[0].type.name, data.stats[1].stat.name);
              generateCard(data)
              
            },1000)
        })
        .catch(error => {
          console.error(error);
        })
}


let generateCard = (data) => {
    const hp = data.stats[0].base_stat;
    const type =  data.types[0].type.name;
    const imgSrc = data.sprites.other['official-artwork'].front_default;
    const statAttack = data.stats[1].base_stat;
   const statDefense = data.stats[2].base_stat;
   const statSpeed = data.stats[5].base_stat;
   const name = data.name;

   cards.innerHTML = ` 
   <h2>${type}</h2>
   <p class="hp">
   
   <span>HP</span>
     ${hp}
 </p>
 <img src=${imgSrc} />
  <div class="name">${name}</div>
   <div class="stats">
   <div>
     <h3>${statAttack}</h3>
     <p>Attack</p>
   </div>
   <div>
     <h3>${statDefense}</h3>
     <p>Defense</p>
   </div>
   <div>
     <h3>${statSpeed}</h3>
     <p>Speed</p>
   </div>
 </div>`
}
btn.addEventListener('click', getRandomPokemon);
btn.addEventListener('DOMContentLoaded',getRandomPokemon)