function fun() {
    const x = document.getElementById('countleft').innerHTML;
    console.log(typeof (x));
    const ans = Number(x) + 1;
    if (ans < 6) {
        document.getElementById('countleft').innerHTML = ans;
        if (ans == 5) {
            alert("Argentina wins");
        }
    }
}
function func() {
    const x = document.getElementById('countright').innerHTML;
    console.log(typeof (x));
    const ans = Number(x) + 1;
    if (ans < 6) {
        document.getElementById('countright').innerHTML = ans;
        if (ans == 5) {
            alert("France wins");
        }
    }
}
// insert for left list
var data1 = document.querySelector(".squadarg ol");
function addForm() {
    event.preventDefault();
    var value1 = document.getElementById('pName').value;
    var li = document.createElement("li");
    var dltbtn = document.createElement("button");
    var span = document.createElement("span");
    li.appendChild(span);
    li.appendChild(dltbtn);
    span.textContent = value1;
    data1.appendChild(li);
    dltbtn.textContent = "delete";
    dltbtn.classList.add("btn1");
    dltbtn.setAttribute('onclick', 'remove(this)');
}
// insert for right list
var data2 = document.querySelector(".squadfrance ol");
function addForm1(){
    event.preventDefault();
    var value = document.getElementById('pName1').value;
    var line = document.createElement("li");
    var dltbtnn = document.createElement("button");
    var spn = document.createElement("span");
    line.appendChild(spn);
    line.appendChild(dltbtnn);
    spn.textContent = value;
    data2.appendChild(line);
    dltbtnn.textContent = "delete";
    dltbtnn.classList.add("btn2");
    dltbtnn.setAttribute('onclick', 'remove(this)'); 
}


// delete for left list and right list
function remove(e) {
    let x = e.parentElement;
    x.remove();
}

// search player
var x = document.getElementById('search-box');
x.addEventListener("keyup", function (e) {
    var y = document.getElementsByTagName("li");
    for (var i = 0; i < y.length; i++) {
        var q = y[i];
        var sp = q.firstChild.nextElementSibling.innerText;
        if (
            sp.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
        ) {
            q.style.display = "block"; 
        }
        else {
             q.style.display = "none";
          }
    }
})