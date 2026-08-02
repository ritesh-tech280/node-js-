const users = [
  { id: 1, name: "Ritesh", age: 20 },
  { id: 2, name: "Aman", age: 17 },
  { id: 3, name: "Rahul", age: 22 },
];

//function for updating the age of the user
function updateUser(users, id, newAge) {
  const updatedUsers = [];
  for (const user of users) {
    if (user.id === id) {
      user.age = newAge;
      updatedUsers.push(user);
    }

    if (user.id !== id) {
      updatedUsers.push(user);
    }
  }
  return updatedUsers;
}
let updatedUser = [];
updatedUser = updateUser(users, 3, 30);
console.log("Updated users list : ", updatedUser);

//function for searching the user
function searchUser(users, keyword) {
  let searchedUsers = [];
  for (const user of users) {
    let name = user.name;
    let anothername = name.toLowerCase();
    if (anothername.includes(keyword.toLowerCase())) {
      searchedUsers.push(user);
    }
  }
  return searchedUsers;
}

let sUser = [];
sUser = searchUser(users, "ra");
console.log("Searched users list : ", sUser);

//function for updating the  user's name

function updateUserName(users, id, newName) {
  let newArr = [];
  for (const user of users) {
    if (user.id === id) {
      const newUser = { id: user.id, name: newName, age: user.age };
      newArr.push(newUser);
    } else {
      newArr.push(user);
    }
  }
  return newArr;
}
 
const updateUserList = updateUserName(users, 2, "Rohit");
for (const user of updateUserList) {
  console.log(user.name);
}
     
 