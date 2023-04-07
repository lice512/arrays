// let students = [1,2,3,'Farrux', true, 'hello ', ['guys', 'my', 11], true, 'name is ', [[0,'years old',0,'and I am ']]]

// console.log(
//     students[5] + ' ' + students[6][0] + ' ' + students[6][1] + ' ' + students[8] + students[3] + ' ' + students[9][0][3] + ' ' + students[6][2] + ' ' + students[9][0][1]
// );

let arr = ['amir', 'farrux', 'sunnat']
let id = +prompt('Любой индекс')
let hamma = arr.length

if(id <= hamma-1 && id > -1){
    arr.splice(id, 1)
    alert(arr)
} else {
    alert('Нет')
}


let arrb = ['amir', 'farrux', 'sunnat']
let name = prompt('Кто не нравится').trim().toLowerCase()

if(arrb.includes(name)) {
    arrb.splice(arrb.indexOf(name), 1)
    alert(arrb)
} else {
    alert('Нет')
}

let arrc = [[{a: {price: 20}}], [{a: {price: 35}}], [{a: {price: 44}}]]
let total = arrc[0][0].a.price + arrc[1][0].a.price + arrc[2][0].a.price


console.log(
    total
    );

