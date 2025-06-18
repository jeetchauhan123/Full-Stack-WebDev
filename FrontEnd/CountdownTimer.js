const enddate=new Date("30 jun 2025 15:00:00").getTime();
const startdate=new Date("17 jun 2025 00:00:00").getTime();

console.log(enddate);
console.log(startdate);


let x=setInterval(function updateTimer() {
    const now=new Date().getTime();

    const distCover=now-startdate;
    const distPending=enddate-now;

    const days=Math.floor(distPending/(24*60*60*1000));

    // const hrs=Math.floor((distPending%(24*60*60*1000)/(60*60*1000)));
    const hrs=Math.floor((distPending/(60*60*1000))%24);

    // const mins=Math.floor((distPending%(60*60*1000)/(60*1000)));
    const mins=Math.floor((distPending/(60*1000))%60);

    // const secs=Math.floor((distPending%(60*100)/(1000)));
    const secs=Math.floor((distPending/1000)%60);


    document.getElementById('day').innerHTML=days;
    document.getElementById('hour').innerHTML=hrs;
    document.getElementById('min').innerHTML=mins;
    document.getElementById('sec').innerHTML=secs;


    const totaldist=enddate-startdate;
    const perdist = (distCover/totaldist)*100;

    document.getElementById('progressbar').style.width=perdist+"%";


    if(distPending<0){
        clearInterval(x);
        document.getElementById('Countdown').innerHTML="EXPIRED";
        document.getElementById('progressbar').style.width="100%"
    }
},1000);