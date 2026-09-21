//Problem - User Analysis

const users = [
    { name: "Rahul", age: 22, active: true },
    { name: "Amit", age: 17, active: false },
    { name: "Sneha", age: 25, active: true },
    { name: "Priya", age: 16, active: true },
    { name: "Rohit", age: 30, active: false }
];



const userName = users.forEach((names) => {
   let nm = names.name
    let ages = names.age >= 18 ? "adult" : "minor"
    let activeConform = names.active === true ? "active" : "inactive"
    let evenOdd = names.age % 2 === 0 ?  "even" : "odd"

    let inactiveOff = activeConform === "inactive" ? "" : `- ${evenOdd}`

    



    

    console.log(`${nm} - ${ages} - ${activeConform}  ${inactiveOff}`)
})



const activeUsers = users.filter((user) => user.active === true);

const inactiveUsers = users.filter((user) => user.active === false);

console.log("Active:", activeUsers.length);
console.log("Inactive:", inactiveUsers.length);















// ---

// **Problem: User Analysis**

// ```javascript
// const users = [
//     { name: "Rahul", age: 22, active: true },
//     { name: "Amit", age: 17, active: false },
//     { name: "Sneha", age: 25, active: true },
//     { name: "Priya", age: 16, active: true },
//     { name: "Rohit", age: 30, active: false }
// ];

// ```

// Write a program to:

// 1. Label users aged 18 or older as **"Adult"**.
// 2. Label users under 18 as **"Minor"**.
// 3. Count only the **active users**.
// 4. Count only the **inactive users**.
// 5. For **active users**, check if their age is **even** or **odd**.
// 6. Finally, find the **name** and **age** of the user with the **highest age**.

// **Expected output roughly:**

// ```text
// Rahul - Adult - Active - Even
// Amit - Minor - Inactive
// Sneha - Adult - Active - Odd
// Priya - Minor - Active - Even
// Rohit - Adult - Inactive

// Active: 3
// Inactive: 2

// Oldest User: Rohit - 30

// ```

// **Rules:**

// Try using these this time:

// * `forEach()` ✅
// * `filter()` ✅
// * `if/else` ✅
// * `%` (Modulus operator) ✅
// * `let` / `const` ✅

// **Forbidden:**

// * ❌ Do NOT use `Math.max()`
// * ❌ Do NOT use `reduce()`
// * ❌ Do NOT use `sort()`



