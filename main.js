const info_banner = document.getElementById("info_banner"),
        pr_popular = document.getElementById("popular"),
        offers = document.getElementById("offers")

let banner_count = 0, popular_count = 0, offert_count = 0

for (let index = 0; index < 3; index++) {
    let offert = document.createElement("article")
    offert.setAttribute("class", "offert")
    offert.setAttribute("style", "left: 0vw")
    info_banner.append(offert)
}

for (let index = 0; index < 10; index++) {
    let pp_product = document.createElement("div")
    pp_product.setAttribute("class", "card pp")
    pp_product.setAttribute("style", "left: 0vw")
    popular.append(pp_product)
}

for (let index = 0; index < 10; index++) {
    let offert_product = document.createElement("div")
    offert_product.setAttribute("class", "card off")
    offert_product.setAttribute("style", "left: 0vw")
    offers.append(offert_product)
}

function move(call, sense) {
    let elements,
        landscape = window.innerWidth > window.innerHeight? true: false,
        mv_banner = landscape? 92:84.25, mv_cards = landscape? 20:45
    
    if (call === "info_banner") {
        elements = document.getElementsByClassName("offert")
        if ((sense === "l" && banner_count <= 0) || (sense === "r" && banner_count >= 2)) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = sense === "l"?
                            `${+elements[key].style.left.slice(0, -2) + mv_banner}vw`:
                            `${+elements[key].style.left.slice(0, -2) - mv_banner}vw`
            }
        }
        banner_count = sense === "l"? banner_count -= 1: banner_count += 1
    }
    if (call === "popular") {
        elements = document.getElementsByClassName("pp")
        if ((sense === "l" && popular_count <= 0) || (sense === "r" && popular_count >= 4)) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = sense === "l"?
                            `${+elements[key].style.left.slice(0, -2) + mv_cards}vw`:
                            `${+elements[key].style.left.slice(0, -2) - mv_cards}vw`
            }
        }
        popular_count = sense === "l"? popular_count -= 1: popular_count += 1
    }
    if (call === "offer") {
        elements = document.getElementsByClassName("off")
        if ((sense === "l" && offert_count <= 0) || (sense === "r" && offert_count >= 4)) return;
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                elements[key].style.left = sense === "l"?
                `${+elements[key].style.left.slice(0, -2) + mv_cards}vw`:
                `${+elements[key].style.left.slice(0, -2) - mv_cards}vw`
            }
        }
        offert_count = sense === "l"? offert_count -= 1: offert_count += 1
    }
}