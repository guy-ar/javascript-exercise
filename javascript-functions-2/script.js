$(document).ready(function() {
    var carArr = [];

    function Car(brand, model, year, km, color){
        this.brand = brand;
        this.color = color;
        this.km = km;
        this.model = model;
        this.year = year;

        /*this.kmPerYear = function() {
            // calcualte the avg km per year
            let today = new Date()
            let year = today.getFullYear();
            let dif = parseInt(year) - this.year + 1;
            let avg = this.km/dif;
            return avg;
        }*/
    }

    Car.prototype.kmPerYear = function() {
        // calcualte the avg km per year
        let today = new Date()
        let year = today.getFullYear();
        let dif = parseInt(year) - this.year + 1;
        let avg = this.km/dif;
        return avg;
    }

    // the flow after drawing the page will include:
    // 1. create Car Array wih initial data
    initCarArr();
    // 2. find the max km within all cars
    findMaxKmInCars();
    // 3. present the data on the table
    showCarsView();


    function initCarArr() {
        addNewCar('BMW', '306', 2017, 120000, "blue");
        addNewCar('Ford', 'whatever', 2012, 220000, "red");
        addNewCar('Citroen', 'C4', 2015, 156000, "yellow");
    }

    function findMaxKmInCars() {
        let max = 0;
        let idx = 0;
        for (var i = 0, l = carArr.length; i < l; i++){
            let temp = carArr[i].kmPerYear();
            if (temp > max) {
                max = temp;
                idx = i;
            }
        }

        console.log("the highest kmPerYear: " + max + " is for " + carArr[idx].brand);
    }

    function showCarsView() {
        for (let i=0, l=carArr.length; i<l; i++){
            var nodeRow = document.createElement("TR"); 
            for (var key in carArr[i]) {
                if (carArr[i].hasOwnProperty(key)) {
                    console.log(key, carArr[i][key]);

                    // go over the columns
                    var nodeCell = document.createElement("TD");
                    var textnode = document.createTextNode(carArr[i][key]);
                    nodeCell.appendChild(textnode);                              // Append the text to <li>
                    nodeRow.appendChild(nodeCell);
                }
            }   
            document.getElementById("content").appendChild(nodeRow);  

        }
    }

    function addNewCar(brand, model, year, km, color) {
        var newCar = new Car(brand, model, year, km, color);
        carArr.push(newCar);
    }

    function handleNewCarView(){
        // this fucntion will get the input from the form and call fucntion to add the data on the cars array
        var brand = document.getElementById("brand").value;
        var model = document.getElementById("model").value;
        var year = document.getElementById("year").value;
        var km = document.getElementById("km").value;
        var color = document.getElementById("color").value;
        addNewCar(brand, model, year, km, color);
    }

    $("#addBtn").click(function() {
    //function refreshView(){
        // reset the table, and refresh the view after adding new car
        var myNode = document.getElementById("content");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        handleNewCarView();
        showCarsView();
    //}
    })


});




