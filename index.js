/* Write a isValidPassword function 

It accepts 2 arguments: password and username 

Password must: 

- be atleast 8 characters 

- cannot contain spaces 

- cannot contain the username 

If all requirements are met, return true, 

otherwise return false */


function isValidPassword(username, password) {
    if (password.length < 8) {
        console.log("try again!");
        return false;
    }
    if (password.includes(username)) {
        console.log("rty again");
        return false;
    } 
    if (password.includes(" ")) {
        console.log("try again!");
        
        return false;
    } // If all conditions are met;
    console.log("well done!");
    
        return true;
    
    
}


isValidPassword("abece","sfsdsfutu");
