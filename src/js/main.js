function menu(){
    document.getElementById('navbar').classList.remove('menu2');
    document.getElementById('social').classList.remove('menu2');
    document.getElementById('navbar').classList.toggle('menu');
    document.getElementById('social').classList.toggle('menu');
}


let listItems = document.getElementsByClassName("list");
for(let i = 0; i <= listItems.length; i++){
    listItems[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.classList.add("active");
    })
}
