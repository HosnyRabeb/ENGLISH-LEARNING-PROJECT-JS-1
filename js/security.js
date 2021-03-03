function isAuthentificated()
{
    var connected = localStorage.getItem("UserConnected");
    if(connected == null)
    {
        window.location.href = "index.html";
    }
}