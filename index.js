window.onload = () => {
    let persona = ["The dog", "My grandma", "His Turtle", "My bird"];
    let accion = ["ate", "peed", "crushed", "broke"];
    let que = ["my homework", "the keys", "the car"];
    let cuando = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

    document.querySelector("#mensaje1").innerHTML = persona[Math.floor(Math.random() * persona.length)];
    document.querySelector("#mensaje2").innerHTML = accion[Math.floor(Math.random() * accion.length)];
    document.querySelector("#mensaje3").innerHTML = que[Math.floor(Math.random() * que.length)];
    document.querySelector("#mensaje4").innerHTML = cuando[Math.floor(Math.random() * cuando.length)];

    // Imprimir en la consola los elementos seleccionados
    var quien = document.querySelector("#mensaje1").innerHTML;
    var accion1 = document.querySelector("#mensaje2").innerHTML;
    var que1 = document.querySelector("#mensaje3").innerHTML;
    var cuando1 = document.querySelector("#mensaje4").innerHTML;

    console.log(quien);
    console.log(accion1);
    console.log(que1);
    console.log(cuando1);
};
