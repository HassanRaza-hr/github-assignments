//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
var admin:string[]=["hassan","admin","waqar","wakeel"]
    admin.forEach((al)=>{
        console.log(`hello ${al} ,thanks for loging`)
       }) 

admin.splice(0,admin.length)
if(admin.length==0){
    
     console.log(`We need to find some users`)
    
 }
 else{
console.log("Length is not zero")
 }
