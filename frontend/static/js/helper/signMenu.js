document.getElementById('signPage').addEventListener('click', function(){
    document.getElementById('app').addEventListener('mousedown', function(){
        var LoginForm = document.getElementById("LoginForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("Indicator");


        function register() {
            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translateX(0px)";
            Indicator.style.transform = "translateX(110px)";
        }

        function login() {
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(0px)";
        }

        document.getElementById("signSpan").addEventListener('click', function(){
            console.log('Clicked on burtguuleh');
            register();
        });
        document.getElementById("logSpan").addEventListener('click', function(){
            console.log('Clicked on the nevtreh');
            login();
        });
    }) 
}
)