$(document).ready(function () {
    console.log("js is function");

    var conn = new WebSocket('ws://localhost:8080');
    conn.onopen = function(e) {
        console.log("Connection established!");
    };

    conn.onmessage = function(e) {
        let response = JSON.parse(e.data); 
        console.log(response);
    };

    //conn.send('Hello World!');
    $("#btnEnvio").on("click",function (e) {
        let nombre = $("#nombre").val();
        let mensaje = $("#mensaje").val();
        let enviar  = {"nombre":nombre,"mensaje":mensaje};
        conn.send(JSON.stringify(enviar));
    });
});

