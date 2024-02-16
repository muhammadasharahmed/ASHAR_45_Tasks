let guests: string [] = ["Anus", "Daniyal" , "Kamran"]

for( let i = 0 ; i<guests.length ; i++) 
{
    console.log( `Dear ${guests[i]}, "Would you like to join me on dinner?"`);
}
console.log(`I am sorry to hear that ${guests[2]} will not be able to join us for dinner.`);

guests[2]="Ali";

for(let i = 0 ; i<guests.length; i++)
{
    console.log(`Dear ${guests[i]}, "Would you like to join me on dinner?"`);
}
console.log(`"We Have found a bigger dinner table."`);

guests.unshift("Ashar");

let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Feroz");


guests.push("Asghar");

for( let i = 0 ; i<guests.length ; i++) 
{
    console.log( `Dear ${guests[i]}, "Would you like to join me on dinner?"`);
}

console.log( `"I can not invite more than two people on dinner."`);
while(guests.length>2)
{
    let removedguests = guests.pop();
    console.log(`"Sorry , ${removedguests} i cant invite you to dinner." `)
}
for(let guest of guests)
{
    console.log(`" Dear ${guest} you are invited to dinner." `);
}

guests.length=0;
console.log(`" Empty Lists : "`, guests);



