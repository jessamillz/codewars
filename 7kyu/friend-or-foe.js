// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// MY SOLUTION
function friend(friends){
    newList = [];
    for (const friend of friends) {
      if (friend.length === 4) newList.push(friend);
    }
    return newList;
}

// OTHER SOLUTIONS (NOT MINE)
function friend(friends){
    return friends.filter(name => name.length === 4)
}

const friend = friends => friends.filter(friend => friend.length == 4);

function friend(friends){
    let goodFriends = [];
    for(let i = 0; i < friends.length; i++){
      if (friends[i].length === 4){
        goodFriends.push(friends[i]);
      };
    };
    return goodFriends;
}