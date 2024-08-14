function Calculate() {
    var gender = document.getElementById('g-input').value;
    var age = document.getElementById('a-input').value;
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;

    if (!gender || !age || !height || !weight) {
        alert("Harap isi semua data!");
        return;
    }

    var result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;

    if (!isNaN(result)) {
        document.getElementById("bmi-output").innerHTML = result.toFixed(2); // Membulatkan hasil ke 2 desimal
        if (result < 18.5) {
            document.getElementById("bmi-status").innerHTML = "Kekurangan Berat Badan";
        } else if (result < 25) {
            document.getElementById("bmi-status").innerHTML = "Normal (Ideal)";
        } else if (result < 30) {
            document.getElementById("bmi-status").innerHTML = "Kelebihan Berat Badan";
        } else {
            document.getElementById("bmi-status").innerHTML = "Kegemukan (Obesitas)";
        }
    }
}
