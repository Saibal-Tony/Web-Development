console.log("Random Box pattern")

let rand = 0 + Math.random()(255);

let e = document.getElementsByClassName("box").childern

function random{
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1} ,${val2} ,${val3})`
}

Arrays.array.forEach(e => {
    e.style.backgroundColor = random();
    e.style.color = random();
});


// if(rand < 0.2){
//     e[0].style.backgroundColor = "green"
//     e[0].style.color = "white"
//     e[1].style.backgroundColor = "red"
//     e[1].style.color = "black"
//     e[2].style.backgroundColor = "blue"
//     e[2].style.color = "white"
//     e[3].style.backgroundColor = "aqua"
//     e[3].style.color = "black"
//     e[4].style.backgroundColor = "brown"
//     e[4].style.color = "black"
// }
// if( rand >= 0.2 && rand < 0.4){
//     e[0].style.backgroundColor = "brown"
//     e[0].style.color = "black"
//     e[2].style.backgroundColor = "blue"
//     e[2].style.color = "white"
//     e[1].style.backgroundColor = "aqua"
//     e[1].style.color = "black"
//     e[3].style.backgroundColor = "red"
//     e[3].style.color = "white"
//     e[4].style.backgroundColor = "green"
//     e[4].style.color = "black"
// }
// if( rand >= 0.4 && rand < 0.6){
//     e[0].style.backgroundColor = "blue"
//     e[0].style.color = "black"
//     e[4].style.backgroundColor = "aqua"
//     e[4].style.color = "black"
//     e[0].style.backgroundColor = "red"
//     e[0].style.color = "white"
//     e[2].style.backgroundColor = "green"
//     e[2].style.color = "black"
//     e[3].style.backgroundColor = "brown"
//     e[3].style.color = "black"
// }
// if( rand >= 0.6 && rand < 0.8){
//     e[0].style.backgroundColor = "aqua"
//     e[0].style.color = "black"
//     e[4].style.backgroundColor = "blue"
//     e[4].style.color = "black"
//     e[2].style.backgroundColor = "red"
//     e[2].style.color = "white"
//     e[1].style.backgroundColor = "green"
//     e[1].style.color = "black"
//     e[3].style.backgroundColor = "brown"
//     e[3].style.color = "black"
// }
// if( rand >= 0.8){
//     e[0].style.backgroundColor = "brown"
//     e[0].style.color = "black"
//     e[0].style.backgroundColor = "aqua"
//     e[0].style.color = "black"
//     e[1].style.backgroundColor = "blue"
//     e[1].style.color = "black"
//     e[4].style.backgroundColor = "red"
//     e[4].style.color = "white"
//     e[3].style.backgroundColor = "green"
//     e[3].style.color = "black"
// }