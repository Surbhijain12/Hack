window.addEventListener("DOMContentLoaded", function () {
  hackComponent();
});

function hackComponent() {
  const component = document.querySelector("my-component");

  if (component) {
    setTimeout(() => {
      const CardName = document.querySelector("#CardName");
      const CardNumber = document.querySelector("#CardNumber");

      if (CardName && CardNumber) {
        alert(`You're HACKED! \n Card Name: \n ${CardName.outerHTML} \n Card Number: \n ${CardNumber.outerHTML}`);
      } else {
        alert(`Hack Attempt Failed! \n Card Name: \n ${CardName?.outerHTML} \n Card Number: \n ${CardNumber?.outerHTML}`);
      }
    }, 500);
  }
}
