function validate()
{
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pw1").value;
    var password=document.getElementById("pw2").value;
    var password=document.getElementById("email").value;
    if(username==""&& password=="")
    {
        alert("user already exits");
        
        return false;
    }
    else
    {
        alert("User Created Successfully");
    }
}