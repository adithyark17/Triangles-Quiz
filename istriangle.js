const inputs = document.querySelectorAll(".angle-input");
const IsTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

const calculateSumOfAngles = (angle1, angle2, angle3) => {
  return angle1 + angle2 + angle3;
};
const isTriangle = () => {
  const sum = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sum === 180) output.innerText = "The angles form a triangle";
  else output.innerText = "The angles do not form a triangle";
};
IsTriangleBtn.addEventListener("click", isTriangle);