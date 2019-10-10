var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var row2 = document.getElementById("r1c2");
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
    };
    Greeter.prototype.resetGreeting = function () {
        var row2 = document.getElementById('r1c2');
        row2.innerHTML = 'r1c2';
    };
    return Greeter;
})();
var greeter = new Greeter('Chue', 'Vang');
