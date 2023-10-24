const trocarfundo = () => {

    var body = document.querySelector("body");
    var h1 = document.querySelectorAll("h1");
    var h2 = document.querySelectorAll("h2");
    var li = document.querySelectorAll("li");
    var p = document.querySelectorAll("p");
    var tr = document.querySelectorAll("tr");
    var th = document.querySelectorAll("th");
    var td = document.querySelectorAll("td");
    let botton = document.getElementById("text");


    body.addEventListener("click", () => {

        if (botton.textContent === "Modo noturno (⌐■_■)") {

            botton.textContent = "Modo dia ( •_•)>⌐■-■";

            body.style.background = "linear-gradient(112deg, rgba(171,63,0,1) 0%, rgba(181,142,0,1) 50%, rgba(207,86,0,1) 100%)";

            h1.forEach((element) => {
                element.style.background = "rgb(201, 130, 8) 100%";
            });

            h2.forEach((element1) => {
                element1.style.background = "rgb(201, 130, 8) 100%";
            });


            li.forEach((element2) => {
                element2.style.background = "background: rgba(141, 81, 12, 0.224) 100%";
            });

            p.forEach((element3) => {
                element3.style.background = "background: rgba(239, 148, 43, 0.224) 100%";
            });

            tr.forEach((element4) => {
                element4.style.background = "background: rgba(239, 148, 43, 0.224) 100%";
            });

            th.forEach((element5) => {
                element5.style.background = "background: rgba(239, 148, 43, 0.224) 100%";
            });

            td.forEach((element6) => {
                element6.style.background = "background: rgba(239, 148, 43, 0.224) 100%";
            })
        } else {
            botton.textContent = "Modo noturno (⌐■_■)";

            body.style.background = "rgb(255, 115, 0) linear-gradient(90deg, rgba(255,115,0,1) 0%, rgba(255,205,0,1) 50%, rgba(255,252,131,1) 100%)";

            h1.forEach((element) => {
                element.style.background = "rgb(255, 176, 39) 100%";
            });
            h2.forEach((element1) => {
                element1.style.background = "rgb(241, 127, 4) 100%";
            });
            li.forEach((element2) => {
                element2.style.background = "rgba(239, 148, 43, 0.224) 100%";
            });
            p.forEach((element3) => {
                element3.style.background = "rgba(239, 148, 43, 0.224) 100%";
            });
            tr.forEach((element4) => {
                element4.style.background = "rgba(239, 148, 43, 0.224) 100%";
            });
            th.forEach((element5) => {
                element5.style.background = "rgba(239, 148, 43, 0.224) 100%";
            });
            td.forEach((element6) => {
                element6.style.background = "rgba(239, 148, 43, 0.224) 100%";
            });
        }
    }
    )
};

