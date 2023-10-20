const trocarfundo = () => {

    var body = document.querySelector("body");
    var h1 = document.querySelectorAll("h1");
    var h2 = document.querySelectorAll("h2");
    var li = document.querySelectorAll("li");
    var p = document.querySelectorAll("p");
    var tr = document.querySelectorAll("tr");
    var th = document.querySelectorAll("th");
    var td = document.querySelectorAll("td");
    

    body.addEventListener("click", () => {

        body.style.background = "rgb(110, 56, 11)";

        h1.forEach((element) => {
            element.style.background = "red";         
        });

        h2.forEach((element1) => {
            element1.style.background = "red";         
        });

        li.forEach((element2) => {
            element2.style.background = "red";         
        });

        p.forEach((element3) => {
            element3.style.background = "red";         
            element3.style.width = 0.1         
        });

        tr.forEach((element4) => {
            element4.style.background = "red";         
        });

        th.forEach((element5) => {
            element5.style.background = "red";         
        });

        td.forEach((element6) => {
            element6.style.background = "red";         
        });
    })
};

