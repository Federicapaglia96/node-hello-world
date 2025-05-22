   

function numeroMaggiore(numbers){

       let numGrandi=numbers[0];

       for(let i=0; i<numbers.length;i++){
        if(numbers[i]>numGrandi){
            numGrandi=numbers[i]
        }
       }
       return numGrandi
}

export {numeroMaggiore};
