const height = document.querySelector(".height");
const base = document.querySelector(".base");
const AreaBtn = document.querySelector("#area");
const output = document.querySelector("#output");

const calculateArea = () => {
  let Area = 0.5 * Number(height.value) * Number(base.value);

  output.innerText = "Area of the triangle is " + Area + "cm^2";
};

AreaBtn.addEventListener("click", calculateArea);