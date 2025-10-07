/* animaition for links*/ 
let links = document.querySelectorAll("ul li a")
links.forEach((e,i)=>{
    console.log(e)
    setTimeout(()=>{
        e.classList.add("op")
    },i*200)
})
/*h1 */ 
let h1 = document.querySelector("h1")
let s = "Your trusted care now and always"
for (let i = 0; i < s.length; i++) {
    setTimeout(() => {
        h1.innerHTML+=s[i]
    }, i*80);
    
}
/*bars*/
let bars = document.getElementById("bars")
bars.onclick = ()=>{
    document.querySelector("nav").classList.toggle("active")
    if (bars.className === "fa-solid fa-bars") {
        bars.className = "fa-solid fa-xmark"
    } else {
     bars.className = "fa-solid fa-bars"   
    }
}
let p = document.querySelectorAll(".clients .text p")
let client = document.querySelectorAll(".clients .row .client")
function removeActive() {
    p.forEach((e,i)=>{
        e.classList.remove("active")
        client[i].classList.remove("active")
    })
}
client.forEach((e,i)=>{
    e.onclick = ()=>{
        removeActive();
        e.classList.add("active")
        p[i].classList.add("active")
    }
})

let plus = document.querySelectorAll(".qu span")
let paras = document.querySelectorAll (".qu p")
plus.forEach((e,i)=>{
    e.onclick = ()=>{
        paras[i].classList.toggle("active")
        if (e.innerHTML === "+") {
            e.innerHTML = "x"
        }else{
            e.innerHTML = "+"
        }
    }
})
let listproduct = document.getElementById("list")
let total = document.getElementById("total")
let cartitems = document.getElementById("cart_content")
function itemsincart(arr){
    arr.forEach((e,i)=>{
        let div = document.createElement("div")
        div.className = "box"
        div.innerHTML = `
        <img src="${products[arr1[i]-1].img}">
        <h3>${products[arr1[i]-1].name}</h3>
        <span class="min"><</span>
        <span class="number">1</span>
        <span class="max">></span>
        `
        total.innerHTML = +total.innerHTML + +parseInt(products[arr1[i]-1].price)
        cartitems.appendChild(div);
        let min = document.querySelectorAll(".min")
        let number = document.querySelectorAll(".number")
        let max = document.querySelectorAll(".max")
        min.forEach((e,i)=>{
            e.onclick = ()=>{
                if (number[i].innerHTML === "1") {
                    number[i].parentElement.remove();
                    // arr1.splice(i,1)
                    total.innerHTML = +total.innerHTML - +parseInt(products[arr1[i]-1].price)
                } else {
                    number[i].innerHTML = +number[i].innerHTML - 1 ;
                    total.innerHTML = +total.innerHTML - +parseInt(products[arr1[i]-1].price)
                }
            }
        })
            max.forEach((e,i)=>{
            e.onclick = ()=>{
                    number[i].innerHTML = +number[i].innerHTML + 1 ;
                    total.innerHTML = +total.innerHTML + +parseInt(products[arr1[i]-1].price)
            }
        })

    })
}


console.log(cartitems)
products.forEach((product)=>{
    let div = document.createElement("div")
    div.className = "col-md-5 col-lg-3 m-5 mx-3 text-center py-5 px-3 item  bg-white";
    div.innerHTML=`
    <img src=${product.img}>
    <h3 class="my-3">${product.name}</h3>
    <div class="d-flex justify-content-between align-items-center">
    <span class="text-black-50">$${product.price}</span>
    <div class="btn" onclick="save(${product.id})">Add To Cart</div>
    </div>
    `
    listproduct.appendChild(div)
})
let arr1 = [];
let arr2 = [];
let btns =  document.querySelectorAll(".item .btn")
if (localStorage.length>=1) {
    arr1 = JSON.parse(localStorage.indexs)
    for (let i = 0; i < arr1.length; i++) {
        btns[arr1[i]-1].innerHTML = "Added"
        btns[arr1[i]-1].style.cursor = "auto"
        btns[arr1[i]-1].style.opacity = ".9"
        
    }
    itemsincart(arr1)
    
}
// alert(arr);
function cartitem(index) {
    let div = document.createElement("div")
    div.className = "box"
    div.innerHTML=`
    <img src=${products[index].img}>
    <h3 class="my-3">${products[index].name}</h3>
    <span class="min"><</span>"
    <span class="number">1</span>
    <span class="mix">></span>
    </div>
    `
    btns[index].style.cursor = "auto"
    btns[index].style.opacity = ".8"
       cartitems.appendChild(div);
       total.innerHTML = +total.innerHTML + parseFloat(products[index].price)   
}

console.log(total)
function save(id) {
    arr1.push(id);
    localStorage.setItem("indexs",JSON.stringify(arr1))
    // window.alert(arr)
    
    btns[id-1].innerHTML = "Added"
    cartitem(id-1);   
}

let c = document.getElementById("c")
let vart = document.getElementById("cart")
let close = document.getElementById("close")

// console.log(Cart)
let cart = ()=>{
    vart.classList.toggle("active")
}
close.addEventListener("click",cart)
c.addEventListener("click",cart)

