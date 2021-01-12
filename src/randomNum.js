NewGame();

var count = 0;

function NewGame() {
    document.getElementById("num_1").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("num_2").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("num_3").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("num_4").innerHTML = Math.floor(Math.random() * 10);

    document.getElementById("expression").value = "";
    count = 0;
}

function AllClear() {
    document.getElementById("expression").value = "";
    count = 0;
}

function submit() {
    if (eval(document.getElementById("expression").value) == 24) {
        if (document.getElementById("expression").value == "24") {
            alert("不可以作弊的哦~");
        } else {
            alert("你赢了！");
            NewGame();
        }
    } else {
        alert("错了哦，继续努力吧！");
    }
    count = 0;
}