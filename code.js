function calculate(){
    var num_1 = Number(document.getElementById("education").value);
    var result = 100;
    result *= num_1; 
    var num_2 = Number(document.getElementById("family net worth").value);
    result *= num_2;
    var num_3 = Number(document.getElementById("caste").value);
    result *= num_3;
    var num_4 = Number(document.getElementsByClassName("skills").value);
    for (i = 0; i < 4; i++) {
        if (num_4[i].checked === true) {
          result += parseFloat(num_4[i].value);
        }
    }
    var num_5 = Number(document.getElementById("age").value);
    for (i = 0; i < num_5; i++) {
        if (num_5[i].checked) {
          result *= parseFloat(num_5[i].value);
        }
    }
    var num_6 = Number(document.getElementsByClassName("reputation").value);
    console.log(num_6);
    for (i = 0; i < 2; i++) {
      if (num_6[i].checked === true) {
        result *= parseFloat(num_6[i].value);
      }
    }
    if (num_6[2].checked === true){
      result -= parseFloat(num_6[2].value);
    }
    localStorage.setItem("result", result);
    return false;
    } 
    var button = document.getElementById("resultButton");
    button.addEventListener("click", calculate);
