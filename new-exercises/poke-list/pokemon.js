

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        const jsonData = xhr.responseText

        const data = JSON.parse(jsonData)

        let pokemonList = data.objects[0].pokemon

        const root = document.getElementById('root')

        console.log(pokemonList.length)
        console.log(pokemonList)

        // for (let i = 0; i < pokemonList.length; i++) { for loop to list multiple
            const h2 = document.createElement('h2')

            const txtNode = document.createTextNode(`${pokemonList[0].name}`)
            h2.appendChild(txtNode)
            root.appendChild(h2)
        
    }
}

xhr.open('GET', 'https://api.vschool.io/pokemon', true)

xhr.send()


    

//     const xhttp = new XMLHttpRequest();

// function loadDoc() {
//     xhttp.onreadystatechange = function() {
        
//       if (this.readyState == 4 && this.status == 200) {
//       myFunction(this);
//       }
//     };
//     xhttp.open("GET", "https://api.vschool.io/pokemon/1", true);
//     xhttp.send();
    
// }
// console.log(xhttp)

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const jsonData = xhr.responseText;
//         const data = JSON.parse(jsonData);
//         const name = data.name;
//         document.getElementById("demo1").textContent = "JSON results: " + jsonData;
//         document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
//         let pokemonList = data.objects[0].pokemon
//         console.log(spaceshipurl);
//     }
// };

// xhr.open("GET", "https://api.vschool.io/pokemon", true);
// xhr.send();

// console.log(xhr)


