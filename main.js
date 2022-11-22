// 
// let result = document.getElementById("result");
let result = document.getElementById("result")

// 数字を押した時
function num(number) {
  // 0を最初に入力させないため
  if (result.innerHTML == "0" || result.innerHTML == "00") {
    result.innerHTML = number.innerHTML;
  } else {  
    result.innerHTML = result.innerHTML + number.innerHTML;
  };
};

// 演算子を押した時
function operator(edit) {
  // 演算子を連続で入力させないため
  if (result.innerHTML.slice(-1) == "+") {
    return;
  } else if(result.innerHTML.slice(-1) == "-") {
    return;
  } else if(result.innerHTML.slice(-1) == "*") {
    return;
  } else if(result.innerHTML.slice(-1) == "/") {
    return;
  } else if(result.innerHTML.slice(-1) == ".") {
    return; 
  }  else {
    result.innerHTML = result.innerHTML + edit.innerHTML;
  }
};


//ACか =押した時
function equal_AC(target) {
  let target_value = target.innerHTML;
  
  if (target.innerHTML == "AC") {
    result.innerHTML = "0";
  } else {
    result.innerHTML = eval(result.innerHTML);
  }
};
  

