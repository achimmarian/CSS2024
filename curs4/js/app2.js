
function creatediv(n){
    for (var h = 0; h < n; h++) {
        var div = document.createElement
        //div.innerHTML = h+1;
        div.className = 'box';
        document.getElementsById("wrapper").appendChild(div);
    }
}
creatediv(72);