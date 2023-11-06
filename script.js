let counter = document.querySelector(".counter")
let valeur = parseInt(counter.getAttribute("data-valeur"))

// quantité à ajouter

function décrementer() {
    let counter = document.querySelector(".counter")
    let valeur = parseInt(counter.getAttribute("data-valeur"))
    valeur--
    counter.setAttribute("data-valeur", valeur)
    counter.innerHTML = valeur
}

function incrémenter() {
    let counter = document.querySelector(".counter")
    let valeur = parseInt(counter.getAttribute("data-valeur"))
    valeur++
    counter.setAttribute("data-valeur", valeur)
    counter.innerHTML = valeur
}

function addToCart() {
    console.log(valeur)
}

//change img sources - thumbnail img

let productImg = document.querySelector(".product")

function imageOne() {
    productImg.src = "./images/image-product-1.jpg"
}

function imageTwo() {
    productImg.src = "./images/image-product-2.jpg"
    console.log("yay")
}

function imageThree() {
    productImg.src = "./images/image-product-3.jpg"
}

function imageFour() {
    productImg.src = "./images/image-product-4.jpg"
}

//change img zoom sources - thumbnail img






let imgThumbnailOne = document.querySelector(".image-one")
let imgThumbnailTwo = document.querySelector(".image-two")
let imgThumbnailThree = document.querySelector(".image-three")
let imgThumbnailFour = document.querySelector(".image-four")

    if (productImg.src = "./images/image-product-1.jpg") {
        imgThumbnailOne.style.border = "solid 2px orange"
    } else if (productImg.src = "./images/image-product-2.jpg") {
        imgThumbnailTwo.style.border = "solid 2px orange"
    }

//voir le panier 

let cart = document.querySelector(".cart")

function viewCart() {
    cart.classList.toggle("off")
}


//carousel mobile

function previousMob() {
    let widthSlider = document.querySelector(".other-product").offsetWidth
    document.querySelector(".carousel").scrollLeft -= widthSlider
}

function nextMob() {
    let widthSlider = document.querySelector(".other-product").offsetWidth
    document.querySelector(".carousel").scrollLeft += widthSlider
}

//carousel zoomm

function previous() {
    let widthSlider = document.querySelector(".other-product").offsetWidth
    document.querySelector(".carousel").scrollLeft -= widthSlider
}

function next() {
    let widthSlider = document.querySelector(".other-product").offsetWidth
    document.querySelector(".carousel").scrollLeft += widthSlider
}

//Menu

let menu = document.querySelector("header ul")
let menuShadow = document.querySelector(".bgshadowmenu")

function openMenu() {
    menu.style.display = "block"
    menuShadow.style.display = "block"
}

function closeMenu() {
    menu.style.display = "none"
    menuShadow.style.display = "none"
}

//Zoom

let zoom = document.querySelector(".zoom")
let zoombg = document.querySelector(".zoombg")

function openZoom() {
    zoom.style.display = "block"
    zoombg.style.display = "block"
}

function closeZoom() {
    zoom.style.display = "none"
    zoombg.style.display = "none"
}

