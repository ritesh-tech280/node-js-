const users = [
    { id: 1, name: "Ritesh", city: "Bareilly" },
    { id: 2, name: "Aman", city: "Delhi" },
    { id: 3, name: "Rahul", city: "Bareilly" },
    { id: 4, name: "Vikas", city: "Delhi" }
];

function groupUsersByCity(users) {
    const groupedUsers = {};
    for(const user of  users){
        let city = user.city;
        if(!groupedUsers[city]){
            groupedUsers[city] = [];
        }
        groupedUsers[city].push(user);
    }

    return groupedUsers;
}

 const groupedUsers =  groupUsersByCity(users)
 console.log("Grouped Users by City : ", groupedUsers)