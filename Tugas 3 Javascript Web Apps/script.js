// untuk menghitung deretfibbonci
document.addEventListener("DOMContentLoaded", function () {
  const calculatorForm = document.getElementById("calculator-form");
  const calculateButton = document.getElementById("calculate-button");
  const clearButton = document.getElementById("clear-button");
  const resultContainer = document.getElementById("result-container");

  calculateButton.addEventListener("click", function () {
    const fibonacciInput = parseFloat(document.getElementById("fibonacci-input").value);

    if (isNaN(fibonacciInput) || fibonacciInput <= 0) {
      resultContainer.innerHTML = "Masukkan angka positif yang valid";
    } else {
      const fibonacciResult = calculateFibonacci(fibonacciInput);
      resultContainer.innerHTML = `${fibonacciResult}`;
    }
  });

  clearButton.addEventListener("click", function () {
    resultContainer.innerHTML = "";

    document.getElementById("fibonacci-input").value = "";
  });

  // Fungsi menghitung deret Fibonacci
  function calculateFibonacci(n) {
    if (n <= 0) {
      return "Masukkan angka positif";
    } else if (n === 1 || n === 2) {
      return "1";
    }

    let a = 1,
      b = 1;
    let result = "1, 1";

    for (let i = 3; i <= n; i++) {
      const next = a + b;
      result += `, ${next}`;
      a = b;
      b = next;
    }
    return result;
  }
});