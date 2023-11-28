const list = ["arance", "uova", "pasta", "mele", "zucchine", "pesche", "noci", "acqua", "pane"];

const ul = document.getElementById("shopping-list");

let i = 0;

while(i<list.length){

    //ul.innerHTML += `<li>${list[i]}</li>`;
    const li = document.createElement("li");
    li.innerText = list[i];
    ul.appendChild(li);

    i++;
}