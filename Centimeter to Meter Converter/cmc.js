function convertToMeter() {
    let cm = document.getElementById("cm").value;

    if (cm === "") {
        document.getElementById("result").innerText =
            "Please enter a value.";
        return;
    }

    let meter = cm / 100;

    document.getElementById("result").innerText =
        cm + " cm = " + meter + " m";
}