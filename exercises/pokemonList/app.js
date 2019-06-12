const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();

console.log(xhr)

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const name = data.objects[0];
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        console.log(name)
    }
}


xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();
