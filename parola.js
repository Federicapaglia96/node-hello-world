function contaVocali(stringa){
    const vocali=["a","e","i","o","u"];
    let conteggio=0;
     for(let i=0; i<stringa.length;i++){
     if(stringa[i]== 'a'|| stringa[i]=='e'|| stringa[i]=='i'|| stringa[i]=='o'|| stringa[i]=='u' ){
        conteggio=conteggio+1
     }
    }
     return conteggio;
}


export {contaVocali};