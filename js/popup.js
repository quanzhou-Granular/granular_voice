let speak_revenue_forecast = document.getElementById('speak_revenue_forecast');

speak_revenue_forecast.onclick = function(element){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET","http://localhost:6543/sell/revenue-forecast#/pricing",false);

    xmlhttp.send();
    alert(xmlhttp.status);
    if (xmlhttp.status==200) {
        var response = xmlhttp.responseText;
        console.log(response);
    }

}