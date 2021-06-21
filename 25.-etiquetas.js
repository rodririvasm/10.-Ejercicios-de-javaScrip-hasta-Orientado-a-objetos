inicio:
for(let i=0;i<=10;i++){
    if(i % 2 !=0){
        continue inicio; /*ir a la siguiente iteracion*/
    }else{
        console.log(i);
    }
}