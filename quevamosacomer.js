let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2'); 
let btn3 = document.getElementById('btn3');
let texto = document.getElementById('texto');
let comidaAlmuerzoCena = ["Pizza","Tallarines","Papas Rellenas","Tarta de Jamon y Queso","Carne al Horno","Hamburgesas","Panchos","Milanesas","Empanadas","Tortilla","Ñoquis","Huevos Revueltos"];
let comidaDesayunoMerienda = ["Torta de Naranja","Budin de Limon","Galletas de Avena","Galletas de Chocolate","Galletas de Manteca","Salchichon de chocolate","Cheesecake","Lemon Pie","Crumble de Manzana","Ensalada de Fruta","Pan de Queso","Pan Relleno"];
let acompañamiento = ["Papas al Hornor","Pure","Papas Fritas","Tuco","Salsa 4 Quesos","Pure Mixto"];

btn.addEventListener('click', function(){
    let randomFood = comidaAlmuerzoCena[Math.floor(Math.random()*comidaAlmuerzoCena.length)];
    texto.innerHTML = randomFood;
})

btn2.addEventListener('click', function(){
    let randomFood = comidaDesayunoMerienda[Math.floor(Math.random()*comidaDesayunoMerienda.length)];
    texto.innerHTML = randomFood;
})

btn3.addEventListener('click', function(){
    let randomFood = acompañamiento[Math.floor(Math.random()*acompañamiento.length)];
    texto.innerHTML = randomFood;
})