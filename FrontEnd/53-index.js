// let fpara=document.getElementById('fpara');
// fpara.textContent="Namaste dunia";

// function changetxt() {
//     let fpara=document.getElementById('fpara');
//     // fpara.textContent="Namaste dunia";
//     fpara.style.backgroundColor="blue";
// }

// let fpara=document.getElementById('fpara');
// fpara.addEventListener('mouseover',changetxt);
// fpara.addEventListener('mouseout ',changetxt);

// fpara.removeEventListener('click',changetxt);




// prevent default event
// let anele=document.getElementById('fanchor');

// anele.addEventListener('mouseover',function(event){
//     event.preventDefault();
//     anele.textContent='click done';
// })
// anele.addEventListener('mouseout',function(event){
//     event.preventDefault();
//     anele.textContent='Click here';
// })



// let paras=document.querySelectorAll('p');

function alertpara(event) {
    if (event.target.nodeName==='SPAN') {
        alert("Clicked on: " + event.target.textContent);
    }
}

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     console.log("event listerner added");
//     para.addEventListener('click',alertpara);
// }


let mydiv=document.getElementById('wrapper');
mydiv.addEventListener('click',alertpara);