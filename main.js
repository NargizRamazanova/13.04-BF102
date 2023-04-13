// Custom concat metodunu 

// function CustomConcat(arr1, arr2){
//     let newArr = [...arr1];
//     for(let k = 0; k<arr2.length; k++){
//         newArr[arr1.length + k] = arr2[k]
//     }
//     return newArr;
// }

// console.log(CustomConcat([1, 2, 3], [4, 5, 6, 7]))



// Custom Every function-u yaz

// var arr = [2, 6, 4]

// console.log(arr.every(x=> x%2==0))

// function CustomEvery(arr,checkfunction){
//    for(let i=0;i<arr.length;i++){
//     if(!checkfunction(arr[i])){
//         return false;
//     }
//    }
//    return true;

// }
// arr =[19,23,35,45];
// function checkage(age){
//     return age>18;
// }

// console.log(CustomEvery(arr,(x)=> x%2!=0));


// Custom Some function yazin

// CustomPush function yazin

// function CustomPush(arr1, elem){
//     arr1[arr1.length] = elem;
//     return arr1.length;
// }

// const arr = [1, 2, 3]

// console.log(CustomPush(arr, 4));
// CustomPush(arr, 6)
// console.log(arr)


//CustomFind function yazin

// function CustomFind(arr, elem){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === elem){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(CustomFind([2, 1, 4], 4))



//CustomUnshift function yarat


function CustomUnshift(arr, elem){
    let midArr = [...arr]
    arr[0] = elem;

    for(let i = 0; i< midArr.length; i++){
        arr[i+1] = midArr[i]
    }
    return arr.length
}

const arr = [1, 2, 3]

CustomUnshift(arr, 4)

console.log(arr)