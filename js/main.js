alert("La final de la NBA consiste en 7 juegos entre Laker y Miami");





let partidosLaker=0;
let partidosMiami=0;



for(let i=1;i<=7;i+=1){

    let lakers=Math.ceil(Math.random()*10);
    let miami=Math.ceil(Math.random()*10);


    if(partidosLaker===4){
        
        break;
    }

    if(partidosMiami===4){
       
        break;
    }

    console.log("-------partido "+i+" ----------")

    if(lakers===miami){
        partidosLaker+=0;
        partidosMiami+=0;
        document.write('<div class="card"><img src="img/empate.jpg"/></div>');
    }else if(lakers>miami){
        partidosLaker+=1;
        document.write('<div class="card"><img src="img/laker.png"/></div>');

    }else  {
        partidosMiami+=1;
        document.write('<div class="card"><img src="img/miami.png"/></div>');
    }

    
    console.log("laker "+lakers)
    console.log(" Miami "+miami);


} 


console.log("-----------------------");

while(partidosMiami===partidosLaker){
    console.log("-------partido de desempate--------")

    

    lakers=Math.ceil(Math.random()*10);
    miami=Math.ceil(Math.random()*10);

    if(lakers>miami){
        partidosLaker+=1;
        document.write('<div class="card"><img src="img/laker.png"/></div>');

    }else  {
        partidosMiami+=1;
        document.write('<div class="card"><img src="img/miami.png"/></div>');
    }

    console.log("laker "+lakers)
    console.log(" Miami "+miami);

    

    console.log("--------------------------")


}

if(partidosLaker>partidosMiami){
    console.log("gano los Laker")
    console.log("resultados : Laker "+partidosLaker+ " Miami "+partidosMiami);
    document.write('<div class="campeon"><img src="img/lakerCampeon.jpg"/></div>');
}else{

    console.log("gano Miami")
    console.log("resultados : Miami "+partidosMiami+ " Laker  "+partidosLaker);
    document.write('<div class="campeon"><img src="img/miamiCampeon.jpg"/></div>');


}