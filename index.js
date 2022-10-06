
//Runtime: 0(n^2)
function hasTargetSum(array, target) {
  //  create an object to keep track of numbers we've already seen
 const seenNumbers = {}  
 //  iterate through each number in the array
 for (let i = 0; i < array.length; i++){
 // for the current num, identify complement that add to the target (comp = target - num)
 const complement = target - array[i];
 // check if any key on our object is the complment
 // if so, return true
 if (seenNumbers[complement]) return true
 // otherwise, add that number to the object
 seenNumbers[array[i]] = true
 }

 // if I reach the end of the array, return false
 return false
 }

/* 
  Write the Big O time complexity of your function here

  Runtime: 0(n^2)
  Space: 0(n)
*/


/* 
  Add your pseudocode here
   returns true, since 19 and 6 add up to 25

   hasTargetSum([1,2,3,4],6)
   seenNumbers = {
    1: true 
    2: true
    3: true
   }

   create an object to keep track of numbers we've already seen
   iterate through each number in the array
    for the current num, identify complement that add to the target (comp = target - num)
    check if any key on our object is the complment
      check if any number is our complement
        if so, return true
    
      if I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4, 8], 6));
}

module.exports = hasTargetSum;
