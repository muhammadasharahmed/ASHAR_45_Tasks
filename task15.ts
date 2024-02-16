let guests: string [] = ["Anus" , "Daniyal" , "Kamran" ]

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