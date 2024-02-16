let locations : string[] = [ "Kashmir" , "China", "Vitenam", "Paris" , "New Zealand" ]

console.log("Original locations:");
locations.forEach(location => console.log(location));

let sortedlocations : string[] = [...locations].sort();

console.log(`\nSorted locations:`);
sortedlocations.forEach(sortedlocation => console.log(sortedlocation));

console.log("\nOriginal locations UNCHANGED :");
locations.forEach(location => console.log(location));


let reverselocations : string[] = [...locations].reverse();
console.log("\nReverse Location : ");
reverselocations.forEach(reverselocation=> console.log( reverselocation)); 

console.log("\nOriginal locations UNCHANGED :");
locations.forEach(location => console.log(location));

