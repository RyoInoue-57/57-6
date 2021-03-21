const add2 = n => n * 100 - 5 // 引数xに2を足す関数
const mul2 = n => (n + 3) * 8 + 3 // 引数xに2を掛ける関数

const n = 3
console.log(add2(n))
console.log(mul2(n)) 
console.log(mul2(add2(n))) //=> 10（3に2を足してから、その結果に2を掛ける）


const items = [
    // 日  月  火  水  木  金  土
      [14, 93, 89, 51, 85, 59, 33],
      [69, 27, 40, 76, 25, 21, 55],
      [55, 60,  3, 28, 49,  5, 91],
      [19, 56, 92, 66, 53, 80, 13],
    ]
    
const sums = items.map((item) => {
    let sum= 0;
    for (let i = 0; i < item.length; i++) {
            sum +=item[i]
        }
        return sum
    })
    console.log(sums) //=> [424, 313, 291, 379]