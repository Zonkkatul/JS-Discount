/* Write a isValidPassword function 

It accepts 2 arguments: password and username 

Password must: 

- be atleast 8 characters 

- cannot contain spaces 

- cannot contain the username 

If all requirements are met, return true, 

otherwise return false */


function isValidPassword(username, password) {
    if (password.includes(username) || password.includes(" ")) {
        alert("try again");
        return false 
    } else {
        alert("well done!");
        return true  
        
    }
    
}


isValidPassword("abece","sfsdsf");