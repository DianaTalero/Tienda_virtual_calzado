const info_banner = document.getElementById("info_banner"),
        pr_popular = document.getElementById("popular"),
        offers = document.getElementById("offers")
        

let banner_count = 0, popular_count = 0, offer_count = 0

for (let index = 0; index < 3; index++) {
    let offert = document.createElement("article")
    offert.setAttribute("class", "offert")
    offert.setAttribute("style", "left: 0vw")
    offert.innerText = `Info Banner ${index + 1}`
    info_banner.append(offert)
}

for (let index = 0; index < 10; index++) {
    let pp_product = document.createElement("div")
    pp_product.setAttribute("class", "card_pp")
    pp_product.setAttribute("style", "left: 0vw")
    pp_product.innerText = `Product Card ${index + 1}`
    popular.append(pp_product)
}

for (let index = 0; index < 10; index++) {
    let offer_product = document.createElement("div")
    offer_product.setAttribute("class", "card_off")
    offer_product.setAttribute("style", "left: 0vw")
    offer_product.innerText = `Offer Product Card ${index + 1}`
    offers.append(offer_product)
}

function ml(call) {
    let elements;
    if (call === "banner") {
        elements = document.getElementsByClassName("offert")
        if (banner_count <= 0) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = `${+elements[key].style.left.slice(0, -2) + 95}vw`
            }
        }
        --banner_count
    }
    if (call === "popular") {
        elements = document.getElementsByClassName("card_pp")
        if (popular_count <= 0) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = `${+elements[key].style.left.slice(0, -2) + 45}vw`
            }
        }
        --popular_count
    }
    if (call === "offer") {
        elements = document.getElementsByClassName("card_off")
        if (offer_count <= 0) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = `${+elements[key].style.left.slice(0, -2) + 45}vw`
            }
        }
        --offer_count
    }
}

function mr(call) {
    let elements
    if (call === "banner") {
        elements = document.getElementsByClassName("offert")
        if (banner_count >= elements.length - 1) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = `${+elements[key].style.left.slice(0, -2) - 95}vw`
            }
        }
        ++banner_count
    }
    if (call === "popular") {
        elements = document.getElementsByClassName("card_pp")
        if (popular_count >= elements.length/2 - 1) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = `${+elements[key].style.left.slice(0, -2) - 45}vw`
            }
        }
        ++popular_count
    }
    if (call === "offer") {
        elements = document.getElementsByClassName("card_off")
        if (offer_count >= elements.length/2 - 1) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = `${+elements[key].style.left.slice(0, -2) - 45}vw`
            }
        }
        ++offer_count
    }
}