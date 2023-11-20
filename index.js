// let inp = document.getElementById("inp");
// let platform = document.getElementById("platform");
// //json file to js
// let request = new XMLHttpRequest();
// request.open("GET", "./movie.json", true);
// request.onload = () => {
//   let arr = JSON.parse(request.responseText);
//   function addToHtml() {
//     for (let i = 0; i < arr.length; i++) {
//       //create card
//       let card = document.createElement("div");
//       card.classList.add("card");
//       platform.append(card);
//       //create card poster
//       let poster = document.createElement("img");
//       poster.classList.add()
//       poster.src = arr[i].Poster;
//       card.append(poster);
//       console.log(arr[i].Poster);
//     }
//   }
//   addToHtml();
// };
// request.send();

let select = document.getElementById("filter-select");
let filterBtn = document.getElementById("filterBtn");

let request = new XMLHttpRequest();
request.open("GET", "./movie.json", true);
request.onload = () => {
  let data = JSON.parse(request.responseText);
  let btn = document.getElementById("btn");
  filterBtn.addEventListener("click", tri);
  function tri() {
    platform.innerHTML = "";
    if (select.value == "titre") {
      data.sort(function (a, b) {
        if (a.Titre.toLowerCase() < b.Titre.toLowerCase()) {
          return -1;
        }
        if (a.Titre.toLowerCase() > b.Titre.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      addToHtml();
    } else if (select.value == "durée") {
      data.sort(function (a, b) {
        return a.durée - b.durée;
      });
      // return a.durée - b.durée;
    }
    filtring();
  }
  console.log(data);

  inp.addEventListener("keyup", filtring);

  function filtring(e) {
    platform.innerHTML = "";
    // e.preventDefault();
    let name = inp.value;
    let card = document.querySelector(".card");
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      let card = document.querySelectorAll(".card");
      if (data[i].Titre.toLowerCase().startsWith(name.toLowerCase())) {
        arr.push(data[i]);
        platform.innerHTML = "";
        for (let k = 0; k < arr.length; k++) {
          platform.innerHTML += `
          <div class='card d-flex flex-row pb-3 mb-5 ms-3'>
          <div class='anime'>
          <button id="redirect">watch trailer</button>
          <button id="information">more Information</button>
          </div>
              <div class='card-poster '>
              <img id="img" class='w-100 h-100'  src="${arr[k].Poster}" alt="" />
              </div>
               <div class='card-content p-3  '>
               <h5 id="poster" class="card-title fs-6 text text-white">${arr[k].Titre}</h5>
               <h5 id="réalisateur" class="réalisateur fs-6 text   text-white  text-opacity-50" > Réalisateur :${arr[k].réalisateur}
               </h5>
               <P class="date  text-white  text-opacity-50">
               Année de production :
                ${arr[k].année}<span class="ms-k durée" >
                <br>
                Durée :
                ${arr[k].durée}</span>
                </p>
                <h5 class='text-white'>Festivals :</h5>
                        <ul class='d-flex me-0'>
                             <li class="text-primary text-muted me-3">
                                 ${arr[k].Festivals[0].Source}
                                  <p class="text-warning ">   ${arr[k].Festivals[0].Value}
                                  </p>
                             </li>
                             <li class="text-primary text-muted me-4">
                              ${arr[k].Festivals[1].Source}
                                <p class="text-warning">${arr[k].Festivals[1].Value}
                                </p>
                             </li>
                             <li class="text-primary text-muted">
                             ${arr[k].Festivals[2].Source}
                                  <p class="text-warning">
                                  ${arr[k].Festivals[0].Value}
                                  </p>
                             </li>
                         </ul>
                         <h5 class="text-white">Acteurs :</h5>
                                 <ul class='d-flex me-0'>
                                     <li class="text-primary text-muted me-3">
                                    ${arr[k].Acteurs[0].Nom} ${arr[k].Acteurs[0].prénom}
                                      <p class="text-warning ">
                                      ${arr[k].Acteurs[0].nationalité}
                                     </p>
                                      </li>

                                   <li class="text-primary text-muted  me-3">
                                     ${arr[k].Acteurs[1].Nom}    ${arr[k].Acteurs[1].prénom}
                                      <p class="text-warning ">
                                      ${arr[k].Acteurs[1].nationalité}
                                     </p>
                                      </li>

                                     <li class="text-primary text-muted  me-3">
                                    ${arr[k].Acteurs[2].Nom}    ${arr[k].Acteurs[2].prénom}
                                   <p class="text-warning ">
                                     ${arr[k].Acteurs[2].nationalité}
                                     </p>
                                      </li>

                                    <li class="text-primary text-muted">
                                      ${arr[k].Acteurs[3].Nom}    ${arr[k].Acteurs[3].prénom}
                                   <p class="text-warning ">
                                      ${arr[k].Acteurs[3].nationalité}
                                     </p>
                                     </li>

                               </ul>
               </div>
           </div>

          `;
        }
        // data = [];
        // data.push();
      }
    }
    if (name == "") {
      addToHtml();
    }
  }
  function addToHtml() {
    platform.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      platform.innerHTML += `
      <div class='card d-flex flex-row pb-3 mb-5 ms-3'>
      <div class='anime'>
      <button id="redirect">watch trailer</button>
      <button id="information">more Information</button>

      </div>
          <div class='card-poster '>
          <img id="img" class='w-100 h-100'  src="${data[i].Poster}" alt="" />
          </div>
           <div class='card-content p-3  '>
           <h5 id="poster" class="card-title fs-6 text text-white">${data[i].Titre}</h5>
           <h5 id="réalisateur" class="réalisateur fs-6 text   text-white  text-opacity-50" > Réalisateur :${data[i].réalisateur}
           </h5>
           <P class="date  text-white  text-opacity-50">
           Année de production :
            ${data[i].année}<span class="ms-i durée" >
            <br>
            Durée :
            ${data[i].durée}</span>
            </p>
            <h5 class='text-white'>Festivals :</h5>
                    <ul class='d-flex me-0'>
                         <li class="text-primary text-muted me-3">
                             ${data[i].Festivals[0].Source}
                              <p class="text-warning ">   ${data[i].Festivals[0].Value}
                              </p>
                         </li>
                         <li class="text-primary text-muted me-4">
                          ${data[i].Festivals[1].Source}
                            <p class="text-warning">${data[i].Festivals[1].Value}
                            </p>
                         </li>
                         <li class="text-primary text-muted">
                         ${data[i].Festivals[2].Source}
                              <p class="text-warning">
                              ${data[i].Festivals[0].Value}
                              </p>
                         </li>
                     </ul>
                     <h5 class="text-white">Acteurs :</h5>
                             <ul class='d-flex me-0'>
                                 <li class="text-primary text-muted me-3">
                                ${data[i].Acteurs[0].Nom} ${data[i].Acteurs[0].prénom}
                                  <p class="text-warning ">
                                  ${data[i].Acteurs[0].nationalité}
                                 </p>
                                  </li>

                               <li class="text-primary text-muted  me-3">
                                 ${data[i].Acteurs[1].Nom}    ${data[i].Acteurs[1].prénom}
                                  <p class="text-warning ">
                                  ${data[i].Acteurs[1].nationalité}
                                 </p>
                                  </li>

                                 <li class="text-primary text-muted  me-3">
                                ${data[i].Acteurs[2].Nom}    ${data[i].Acteurs[2].prénom}
                               <p class="text-warning ">
                                 ${data[i].Acteurs[2].nationalité}
                                 </p>
                                  </li>

                                <li class="text-primary text-muted">
                                  ${data[i].Acteurs[3].Nom}    ${data[i].Acteurs[3].prénom}
                               <p class="text-warning ">
                                  ${data[i].Acteurs[3].nationalité}
                                 </p>
                                 </li>

                           </ul>
           </div>
       </div>

      `;
    }
  }
  addToHtml();
};
request.send();
