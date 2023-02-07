//----------------Sikundamer--------------------
const sikundamer = document.querySelector('#timer');
let time = 0;
let jamanak;

function startTimer() {
    jamanak = setInterval(() => {
        time++;
        let hours = Math.floor((time / 3600))
        let minutes = Math.floor((time % 3600) / 60);
        let second = time % 60;
        sikundamer.innerHTML = `${hours < 10 ? '0' + hours : hours} : ${minutes  < 10 ? '0' + minutes : minutes} : ${second  < 10 ? '0' + second : second}`

    }, 1000)
}


document.querySelector('#start').addEventListener('click', startTimer);

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(jamanak);
});

document.querySelector('#clear').addEventListener('click', () => {
  sikundamer.innerHTML = '00 : 00 : 00';
  time = 0;
  clearInterval(jamanak);
});



//-------------------------------Traffic Light-------------------------------------

// const color = document.querySelectorAll('#color')
// console.log(color);
// color.item(0).style.backgroundColor = 'red';
// color.item(1).style.backgroundColor = 'yellow';
// color.item(2).style.backgroundColor = 'green';
// let traffic = 0;

//     function trafficLight(){
//           setInterval(() => {
//             if(traffic === 0){
//                 color.item(0).style.backgroundColor = 'red';
//                 color.item(1).style.backgroundColor = 'grey';
//                 color.item(2).style.backgroundColor = 'grey';
//                 traffic++
//             } else if(traffic === 1){
//                     color.item(0).style.backgroundColor = 'grey';
//                     color.item(1).style.backgroundColor = 'yellow';
//                     color.item(2).style.backgroundColor = 'grey';
//                     traffic++;
//             } else if(traffic === 2) {
//                     color.item(0).style.backgroundColor = 'grey';
//                     color.item(1).style.backgroundColor = 'grey';
//                     color.item(2).style.backgroundColor = 'green';
//                     traffic = 3;
//             }else if(traffic === 3){
//                 color.item(0).style.backgroundColor = 'grey';
//                 color.item(1).style.backgroundColor = 'yellow';
//                 color.item(2).style.backgroundColor = 'grey';
//                 traffic = 0
//             }
            
//         }, 2000)
//     }
    
//     trafficLight()



let shaxmat = document.querySelector("#shaxmat");
shaxmat.innerHTML =  "<table>" 
console.log(shaxmat); 