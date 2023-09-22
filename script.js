// untuk menghitung deretfibbonci
document.addEventListener("DOMContentLoaded", function () {
  const hitungButton = document.getElementById("hitung-Button");
  const clearButton = document.getElementById("clear-button");
  const hasilFibonacci = document.getElementById("hasilFibonacci");

  hitungButton.addEventListener("click", function () {
    const fibonacciInput = parseFloat(document.getElementById("fibonacci-input").value);

    if (isNaN(fibonacciInput) || fibonacciInput <= 0) {
      hasilFibonacci.innerHTML = "Masukkan angka positif yang valid";
    } 
    else {
      const fibonacciResult = calculateFibonacci(fibonacciInput);
      hasilFibonacci.innerHTML = `${fibonacciResult}`;
    }
  });

  clearButton.addEventListener("click", function () {
    hasilFibonacci.innerHTML = "";

    document.getElementById("fibonacci-input").value = "";
  });

  // Fungsi menghitung deret Fibonacci
  function calculateFibonacci(n) {
    if (n <= 0) {
      return "Masukkan angka positif";
    } 
    else if (n === 1 || n === 2) {
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



// program mencari volume bangun ruang
document.addEventListener("DOMContentLoaded", function () {
  const pilihBidang = document.getElementById("pilihBidang");
  const kubusInput = document.getElementById("kubusInput");
  const tabungInput = document.getElementById("tabungInput");
  const bolaInput = document.getElementById("bolaInput");
  const hitungButton = document.getElementById("hitungButton");
  const hasilVolume = document.getElementById("hasilVolume");
  
  pilihBidang.addEventListener("change", () => {
    const pilSemuaBidang = pilihBidang.value;

    // menyembunyikan semua form input
    kubusInput.style.display = "none";
    tabungInput.style.display = "none";
    bolaInput.style.display = "none";

    // menampilkan input yang sesuai dengan bangun ruang yang dipilih
    if (pilSemuaBidang === "kubus") {
      kubusInput.style.display = "block";
    } 
    else if (pilSemuaBidang === "tabung") {
      tabungInput.style.display = "block";
    } 
    else if (pilSemuaBidang === "bola") {
      bolaInput.style.display = "block";
    }
    
  });

  
  // untuk menghitung & hasil mencari volume
  hitungButton.addEventListener("click", () => {
    const pilSemuaBidang = pilihBidang.value;

    if (pilSemuaBidang === "kubus") {

      const panjangSisi = parseFloat(document.getElementById("pnjSisiKubus").value);
      if (!isNaN(panjangSisi) && panjangSisi > 0) {
        const volume = Math.pow(panjangSisi, 3);
        hasilVolume.textContent = volume.toFixed(2);
      } 
      else {
        hasilVolume.textContent = "Masukkan panjang sisi yang valid.";
      }
    } else if (pilSemuaBidang === "tabung") {
      const radius = parseFloat(document.getElementById("jariTabung").value);
      const height = parseFloat(document.getElementById("tinggiTabung").value);

      if (!isNaN(radius) && !isNaN(height) && radius > 0 && height > 0) {
        const volume = Math.PI * Math.pow(radius, 2) * height;
        hasilVolume.textContent = volume.toFixed(2);
      } 
      else {
        hasilVolume.textContent = "Masukkan jari-jari dan tinggi yang valid.";
      }
    }
      else if (pilSemuaBidang === "bola") {
      const radius = parseFloat(document.getElementById("jariBola").value);

      if (!isNaN(radius) && radius > 0) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        hasilVolume.textContent = volume.toFixed(2);
      } 
      else {
        hasilVolume.textContent = "Masukkan jari-jari yang valid.";
      }
    }
  });
      // untuk membersihkan hasil dan inputan
      clearButton.addEventListener("click", () => {
        
        formInput.querySelectorAll("textarea").forEach((textarea) => {
            textarea.value = "";
        });
        hasilVolume.textContent = "";
      });
});
