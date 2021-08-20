const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

const calculateSumOfSquares = (a, b) => {
  return a * a + b * b;
};

const calculateHypotenuse = () => {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
};

hypotenuseBtn.addEventListener("click", calculateHypotenuse);