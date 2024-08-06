const myArray = []
// %debugPrint(myArray)

//* Type of Array
 //1 Continous Array
 //Holey Array

 // 3 types of Optimization
 //SMI(small integers)
 //Packed element
 //Double(float,String,function)
 
const myArr = [1,2,3,4,5,]
//Packed (SMI) Elemenst

myArr.push(6.0)
//Packed_Double_Elements

myArr.push('7')
//Packed_Element

myArr[10] = 12
//Holey_Elements   because of gap

console.log(myArr);
console.log(myArr.length);
console.log(myArr[9]);