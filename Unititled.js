function result (a, b){
    return a + b;
}
console.log(result(5, 20));

var arr = [1, 'Igor', 3.2, 'f', ['ggggg']];
for (var i = 0; i < arr.length; i++){

    console.log(arr[i]);
}

arr.forEach(function(element){
console.log(element);
})
    
var students = [
{   firstName: 'Tanya', lastName: 'Romanyuk', ratting: '90'},
{   firstName: 'Angela', lastName: 'Catavasia', ratting: '65'},
{   firstName: 'Olga', lastName: 'Lipaka',   ratting: '75'},
{   firstName: 'Igor', lastName: 'Mandzyuk', ratting: '95'}
];
 students.sort(function(a, b){
 if (a.firstName > b.firstName){
     return 1;
 }
 if (a.firstName < b.firstName){
    return -1;
}
    return 0;
})
console.log(students);

