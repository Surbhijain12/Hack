setTimeout(function () {
    let CardNumberInput = document.getElementById("CardNumber");
    let stealCardNumberDiv = document.getElementById("stealCardNumber");
    console.log('----CardNumberInput----',CardNumberInput);
    console.log('-----stealCardNumberDiv---',stealCardNumberDiv);
    CardNumberInput.addEventListener('blur', stealCardNumber);

    function stealCardNumber() {
      let x = CardNumberInput.value;
      console.log("hack by another script ", x);
      stealCardNumberDiv.innerHTML = x;
    }
}, 500);