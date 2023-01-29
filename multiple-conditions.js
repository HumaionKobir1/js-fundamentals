var isGraduate = true;
var salary = 75000;
var car = 1;

if (isGraduate == true){
    console.log('Eso biye kori');
}
else{
    console.log('tor kopale biye nai');
}

// other example

if (isGraduate == true && salary > 50000 && car >= 1){
    console.log('Eso biye kore feli');
}
else{
    console.log('tor kopale biye nai');
}

// other-example
if (isGraduate === true || salary > 50000 || car >= 1){
    console.log('Eso Prem kori');
}
else{
    console.log('tomar friend er number dau');
}

// another example
if (isGraduate === true && salary > 50000 || car >= 1){
    console.log('this is last example for multiple condition');
}