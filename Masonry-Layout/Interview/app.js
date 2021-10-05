const arrayList = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 10, b: 20}]
let arr = []
arrayList.map(element => {
  let sum = element.a + element.b
  arr.push(sum)
})

console.log(arr)