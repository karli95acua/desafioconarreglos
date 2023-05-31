
// Desafio número 1 - Siempre hambriento //

function alwaysHungry(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
        } else {
            console.log("Tengo hambre");
        }
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);  
alwaysHungry([4, 1, 5, 7, 2]); 
alwaysHungry(["pastel",5,5,5,5,5,5,5,"comida",8,8,8,8,8]); //otro ejemplo


// Desadio número 2 - Filtro paso alto 


function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result1 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
var result2 = highPass([3,3,-2,-1,3,10]); //otro ejemplo
console.log(result1); 
console.log(result2);


// Desafío número 3 - Mejor que el promedio 

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // Hay 4 números mayores que el promedio de los números del arreglo



// Desafío número 4 - Arreglo invertido 



function reverse(arr) {
    arr.reverse();
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 


// Desafío número 5 - Arreglo de Fibonacci

function fibonacciArray(n) {
    var fibArr = [0, 1];
    
    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // De esta manera obtenemos la secuencia de fibonacci: 
                     //El primer número es 0, el segundo número es 1, el tercer número es 0 + 1 = 1
                     // El cuarto número es 1 + 1 = 2
                     // El quinto número es 1 + 2 = 3, etc 

