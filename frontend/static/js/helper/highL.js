document.getElementById('productPage').addEventListener('click', function(){
    document.getElementById('app').addEventListener('mousedown', function(){
        var btnContainer = document.getElementById("BtnContainer");
        var btns = btnContainer.getElementsByClassName("btn-filter");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
        }
    }) 
}
)
