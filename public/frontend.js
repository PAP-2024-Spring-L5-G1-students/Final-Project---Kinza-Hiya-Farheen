const somid = document.getElementById("som");
const formid = document.getElementById("brand");
const formid2 = document.getElementById("product");


async function getBrand(val) {
    const response = await fetch("http://localhost:5500/brand" + val);
    const data = await response.json();

    data.forEach(item => {
        somid.innerHTML += `<li>${item.TopFoundation}</li>`;
        somid.innerHTML += `<li>${item.TopConcealer}</li>`;
        somid.innerHTML += `<li>${item.TopBlush}</li>`;
        somid.innerHTML += `<li>${item.TopContour}</li>`;
        somid.innerHTML += `<li>${item.TopBrowProduct}</li>`;
        somid.innerHTML += `<li>${item.TopMascara}</li>`;
    });
}

async function getProduct(val) {
    const response = await fetch("/product" + val);

    const data = await response.json();
    console.log(val)
    data.forEach(item => {
        if (item.TopFoundation != undefined && item.TopFoundation != "null") {
            somid.innerHTML += `<li>${item.TopFoundation}</li>`;
        } else if (item.TopConcealer != undefined && item.TopConcealer != "null") {
            somid.innerHTML += `<li>${item.TopConcealer}</li>`;
        } else if (item.TopBlush != undefined && item.TopBlush != "null") {
            somid.innerHTML += `<li>${item.TopBlush}</li>`;
        } else if (item.TopContour != undefined && item.TopContour != "null") {
            somid.innerHTML += `<li>${item.TopContour}</li>`;
        } else if (item.TopBrowProduct != undefined && item.TopBrowProduct != "null") {
            somid.innerHTML += `<li>${item.TopBrowProduct}</li>`;
        } else if (item.TopMascara != undefined && item.TopMascara != "null") {
            somid.innerHTML += `<li>${item.TopMascara}</li>`;
        } else {
            console.log("nothing")
        }
    });
}

async function getBrandAndProduct(val) {
    const response = await fetch("/product" + val);

    const data = await response.json();
    console.log(val)
    data.forEach(item => {
        if (item.TopFoundation != undefined && item.TopFoundation != "null") {
            somid.innerHTML += `<li>${item.TopFoundation}</li>`;
        } else if (item.TopConcealer != undefined && item.TopConcealer != "null") {
            somid.innerHTML += `<li>${item.TopConcealer}</li>`;
        } else if (item.TopBlush != undefined && item.TopBlush != "null") {
            somid.innerHTML += `<li>${item.TopBlush}</li>`;
        } else if (item.TopContour != undefined && item.TopContour != "null") {
            somid.innerHTML += `<li>${item.TopContour}</li>`;
        } else if (item.TopBrowProduct != undefined && item.TopBrowProduct != "null") {
            somid.innerHTML += `<li>${item.TopBrowProduct}</li>`;
        } else if (item.TopMascara != undefined && item.TopMascara != "null") {
            somid.innerHTML += `<li>${item.TopMascara}</li>`;
        } else {
            console.log("nothing")
        }
    });
}

formid.addEventListener("submit", (e) => {
    e.preventDefault();
    somid.innerHTML = " ";

        getBrand(document.querySelector("#brands").value);
    console.log("submited")
})

formid.addEventListener("submit", (e) => {
    e.preventDefault();
    somid.innerHTML = " ";

        getBrand(document.querySelector("#brands").value);
    console.log("submited")
})

formid2.addEventListener("submit", (e) => {
    e.preventDefault();
    somid.innerHTML = " ";

        getProduct(document.querySelector("#products").value);
    console.log("submited")
})