const somid = document.getElementById("som");
const formid = document.getElementById("brand");
const formid2 = document.getElementById("product");
const brandSetup = document.getElementById("brands")

// async function testgo() {
//     const response = await fetch("http://localhost:5500/everything");

// }

async function dropDownSetup() {
    const response = await fetch("http://localhost:5500/allBrands");
    const data = await response.json();

    data.forEach(item => {
        brandSetup.innerHTML += `<option value="${item.BrandName}">${item.BrandName}</option>`;
    })
}

async function getBoth(product, brand) {
    const response = await fetch(`http://localhost:5500/search/` + product + `/${brand}`);

    const data = await response.json();

    data.forEach(item => {
        if (item.TopFoundation != undefined && item.TopFoundation != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopFoundationLink}" >${item.TopFoundation}</a></div>`;
        } else if (item.TopConcealer != undefined && item.TopConcealer != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopConcealerLink}" class="response">${item.TopConcealer}</a></div>`;
        } else if (item.TopBlush != undefined && item.TopBlush != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopBlushLink}">${item.TopBlush}</a></div>`;
        } else if (item.TopContour != undefined && item.TopContour != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopContourLink}">${item.TopContour}</a></div>`;
        } else if (item.TopBrowProduct != undefined && item.TopBrowProduct != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopBrowProduct}">${item.TopBrowProduct}</a></div>`;
        } else if (item.TopMascara != undefined && item.TopMascara != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopMascara}">${item.TopMascara}</a></div>`;
        } else {
            somid.innerHTML += `<div class="response">Product does not exist, try something else.</div>`;
            console.log("nothing")
        }
    });
}

async function getBrand(val) {
    const response = await fetch("http://localhost:5500/brand" + val);
    const data = await response.json();

    data.forEach(item => {
        if (item.TopFoundation != undefined && item.TopFoundation != 'null') {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopFoundationLink}" >${item.TopFoundation}</a></div>`;
        }
        if (item.TopConcealer != undefined && item.TopConcealer != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopConcealerLink}" class="response">${item.TopConcealer}</a></div>`;
        }
        if (item.TopBlush != undefined && item.TopBlush != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopBlushLink}">${item.TopBlush}</a></div>`;
        }
        if (item.TopContour != undefined && item.TopContour != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopContourLink}">${item.TopContour}</a></div>`;
        }
        if (item.TopBrowProduct != undefined && item.TopBrowProduct != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopBrowProduct}">${item.TopBrowProduct}</a></div>`;
        }
        if (item.TopMascara != undefined && item.TopMascara != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopMascara}">${item.TopMascara}</a></div>`;
        }
    });
}

async function getProduct(val) {
    const response = await fetch("/product" + val);

    const data = await response.json();
    console.log(val)
    data.forEach(item => {
        if (item.TopFoundation != undefined && item.TopFoundation != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopFoundationLink}" >${item.TopFoundation}</a></div>`;
        } else if (item.TopConcealer != undefined && item.TopConcealer != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopConcealerLink}" >${item.TopConcealer}</a></div>`;
        } else if (item.TopBlush != undefined && item.TopBlush != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopBlushLink}">${item.TopBlush}</a></div>`;
        } else if (item.TopContour != undefined && item.TopContour != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopContourLink}">${item.TopContour}</a></div>`;
        } else if (item.TopBrowProduct != undefined && item.TopBrowProduct != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopBrowProduct}">${item.TopBrowProduct}</a></div>`;
        } else if (item.TopMascara != undefined && item.TopMascara != "null") {
            somid.innerHTML += `<div class="response"><a target="_blank" class="response" href="${item.TopMascara}">${item.TopMascara}</a></div>`;
        } else {
            console.log("nothing")
        }
    });
}

formid2.addEventListener("submit", (e) => {
    e.preventDefault();
    somid.innerHTML = " ";
    if (document.querySelector("#products").value === "Blank") {
        getBrand(document.querySelector("#brands").value)
    } else if (document.querySelector("#brands").value === "Blank") {
        getProduct(document.querySelector("#products").value)
    } else {
        getBoth(document.querySelector("#products").value, document.querySelector("#brands").value);
    }
})

function dropDownSetups() {
    dropDownSetup();
}

dropDownSetups();
