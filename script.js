function test() {
    var a = "3";
    var b = "8";

    var c = b;
    var b = a;
    var a = c;

    console.log("a is " + a);
    console.log("b is " + b);
}
