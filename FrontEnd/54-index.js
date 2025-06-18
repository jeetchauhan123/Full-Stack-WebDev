
// performance time, reflow, repaint



// case 1

// const t1=performance.now();

// for (let i = 1; i <= 100; i++) {
//     let para=document.createElement('p');
//     para.textContent="this is para "+i;
//     document.body.appendChild(para);
// }

// const t2=performance.now();

// console.log("total time by code 1: "+(t2-t1));




// case 2
// const t3=performance.now();

// let mydiv=document.createElement('div');

// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="this is para "+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4=performance.now();

// console.log('time by code 2: '+(t4-t3));





// best case

// let time1=performance.now();

// let frag=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p')
//     para.textContent="this is para "+i+"abc";
//     // no reflow and repaint below
//     frag.appendChild(para);
// }
// document.body.appendChild(frag);

// let time2=performance.now();

// console.log("time taken",(time2-time1));








// experiment

let ele1=document.getElementById('div1')
let ele2=document.getElementById('div2')
let ele3=document.getElementById('div3')
let ele4=document.getElementById('div4')
let ele5=document.getElementById('div5')
let ele6=document.getElementById('div6')


let time1=performance.now();



let frag1=document.createDocumentFragment();
for(let i=1;i<=50;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i+"abc";
    para.setAttribute('class','anime1');
    para.style.width='150px';
    // para.style.opacity='0'
    // no reflow and repaint below
    frag1.appendChild(para);
}
ele1.appendChild(frag1);


let frag2=document.createDocumentFragment();
for(let i=1;i<=50;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i+"abc";
    para.setAttribute('class','anime2');
    para.style.width='150px';
    // no reflow and repaint below
    frag2.appendChild(para);
}
ele2.appendChild(frag2);


let frag3=document.createDocumentFragment();
for(let i=1;i<=50;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i+"abc";
    para.setAttribute('class','anime3');
    para.style.width='150px';
    // no reflow and repaint below
    frag3.appendChild(para);
}
ele3.appendChild(frag3);


let frag4=document.createDocumentFragment();
for(let i=1;i<=50;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i+"abc";
    para.setAttribute('class','anime4');
    para.style.width='150px';
    // no reflow and repaint below
    frag4.appendChild(para);
}
ele4.appendChild(frag4);


let frag5=document.createDocumentFragment();
for(let i=1;i<=50;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i+"abc";
    para.setAttribute('class','anime5');
    para.style.width='150px';
    // no reflow and repaint below
    frag5.appendChild(para);
}
ele5.appendChild(frag5);


let frag6=document.createDocumentFragment();
for(let i=1;i<=50;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i+"abc";
    para.setAttribute('class','anime6');
    para.style.width='150px';
    // no reflow and repaint below
    frag6.appendChild(para);
}
ele6.appendChild(frag6);




let time2=performance.now();
console.log("time taken",(time2-time1));


