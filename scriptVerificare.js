function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("firstname").value;
    // If x is Not a Number or less than one or greater than 10
    let y = document.getElementById("lastname").value;
    let z = document.getElementById("msg").value;
    let e = document.getElementById("email").value; 
    let t = document.getElementById("tel").value; 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x == "" || y == "") 
        alert("Full name must be filled out");
    if (z == "") 
        alert("Message must be filled out");
    if (e == "")
        alert("Email must be filled out");
    if (t == "")
        alert("Phone must be filled out");
    else if(e.match(mailformat))
    {
        prompt("Valid email address!");
    }
    else
        alert("Invalid email address!");
}