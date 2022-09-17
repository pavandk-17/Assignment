function validate()
{
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pw").value;
    if(username=="admin"&& password=="user")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}