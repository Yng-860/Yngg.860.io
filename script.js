function result(){
    var liczba = parseFloat(document.getElementById("numberinput").value)
    var floorValue = Math.floor(liczba);
    var ceilValue = Math.ceil(liczba);
    var roundValue = Math.round(liczba);
    var truValue = Math.trunc(liczba)

    document.getElementById("dol").innerHTML += floorValue;
    document.getElementById("gora").innerHTML += ceilValue;
    document.getElementById("calkowita").innerHTML += roundValue;
    document.getElementById("usunieta").innerHTML += truValue;

    
    
}