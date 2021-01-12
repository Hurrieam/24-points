function num_1() {
    document.getElementById("expression").value += document.getElementById("num_1").innerHTML;
    count = 0;
}

function num_2() {
    document.getElementById("expression").value += document.getElementById("num_2").innerHTML;
    count = 0;
}

function num_3() {
    document.getElementById("expression").value += document.getElementById("num_3").innerHTML;
    count = 0;
}

function num_4() {
    document.getElementById("expression").value += document.getElementById("num_4").innerHTML;
    count = 0;
}

function plus() {
    document.getElementById("expression").value += "+";
    count = 0;
}

function minus() {
    document.getElementById("expression").value += "-";
    count = 0;
}

function multiply() {
    document.getElementById("expression").value += "*";
    count = 0;
}

function devide() {
    document.getElementById("expression").value += "/";
    count = 0;
}

function multiplymultiply() {
    //document.getElementById("expression").value += "*";
    alert("Surprise! :D \n\n     ——Hurrieam");
    document.getElementById("multiplymultiply").style.visibility = "hidden";
    count = 0;
}

function left() {
    document.getElementById("expression").value += "(";
    count = 0;
}

function right() {
    document.getElementById("expression").value += ")";
    count = 0;
}

function sqrt() {
    document.getElementById("expression").value += "Math.sqrt(";
    count += 1;
    if (count == 10) {
        document.getElementById("multiplymultiply").style.visibility = "visible";
    }
}