
const marks = [45, 72, 33, 90, 18, 67, 50, 29];


const passMark = marks.filter((passMarks) => passMarks >= 40)
const failMark = marks.filter((failMarks) => failMarks < 40)


console.log("total students", marks.length)
totalPass = passMark.length
totalfail = failMark.length
console.log("total pass",totalPass)
console.log("total fail",totalfail)


const findEvenOdd = passMark.forEach((find) => {

    const findPass = find % 2 === 0

    if(findPass) {
        console.log(find, "- even")
    } else{
        console.log(find, "- odd")
    }
}) 

