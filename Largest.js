const a = 5;
const b = 6;
const c = 7;

if (a > b && a > c) {
  console.log(a + " is largest number");
} else if (b > a && b > c) {
  console.log(b + " is largest number");
} else {
  console.log(c + " is largest number");
}

// count vowels
const vowels = "aeiouAEIOU";
const str = "RiteshKumar";

let count = 0;
for (const vowel of str) {
  if (vowels.includes(vowel)) {
    count++;
  }
}
console.log("The number of vowles in " + str + " are : " + count);

// count even number
const numbers = [4, 7, 10, 15, 22, 9];
function counter(numbers) {
  count = 0;
  for (n of numbers) {
    if (n % 2 == 0) {
      count++;
    }
  }
  return count;
}

const neven = counter(numbers);
console.log(neven);

const users = [
  { id: 1, name: "Ritesh", age: 20 },
  { id: 2, name: "Aman", age: 17 },
  { id: 3, name: "Rahul", age: 22 },
];

function findAdults(users) {
  let adults = [];
  for (const user of users) {
    if (user.age > 18) {
      adults.push(user);
    }
  }
  console.log(adults);
}

findAdults(users);

function deleteUser(users, id) {
  const remauser = [];
  for (const user of users) {
    if (user.id != id) {
      remauser.push(user);
    }
  }
  return remauser;
}

const remaininuser = deleteUser(users, 2);
console.log(remaininuser);
