// Joe Sembler
// Flatiron School
// Phase 0: "Intro to JavaScript 2 - Looping Code Along"

function writeCards(names){
    const thankYou = [];
    let i = 0;
    while (i < 3){
        thankYou[i] = "Thank you, " + names[i] + ", for the wonderful surprise gift!"; 
        i++; 
    }

    return thankYou;
}

function countDown(num){
    //let i = 0;
    while(num > -1){
        console.log(num);
        num--;  
    }
    return null;
}