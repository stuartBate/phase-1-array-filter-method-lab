// Code your solution here
function findMatching(array, target){
    return array.filter(
        (possibleMatach) => possibleMatach.toLowerCase() === target.toLowerCase()
    );
}


function fuzzyMatch(array, testString ){
    return array.filter(
        (possibleMatch) =>
          possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
 }
    

 function matchName(array, targetName){
    return array.filter((record) => record.name === targetName);
 }