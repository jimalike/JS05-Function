

function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * ผลลัพธ์เป็น undefined เพราะว่า ไม่ได้ใส่ค่าลงใน sayhi 
console.log(sayHi(10)); // ผลลัพธ์ เป็น undefind ได้ alert ออกมาเป็น Hi kid
                        // หลังจบการทำงานจะ return undefind มาให้