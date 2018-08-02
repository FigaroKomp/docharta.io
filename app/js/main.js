function draw() {

    var x, y;

    var a = parseFloat(document.getElementById("a").value)
    var b = parseFloat(document.getElementById("b").value)
    var c = parseFloat(document.getElementById("c").value)

    x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, ];
    y = [];
// funkcja kwadratowa, dodawanie na koniec tablicy y z każdego x'a
    for (var el of x) {
        var fsq = Math.pow(el, 2) * a + el * b + c;
        y.push(fsq);
    }




    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: x,
            datasets: [{
                label: "",
                backgroundColor: '#FFCB46',
                borderColor:'#E8610C',
                data: y,
        }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{

                    ticks: {
                        beginAtZero: false,


                    }
            }]
            }
        }
    });
}
draw();
//ponowne wywołanie z innymi a,b,c, bez przeładowywania(prawie jak AJAX :P)
form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("ok");
    draw();
});