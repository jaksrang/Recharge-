function recharge() {
    var mobileNumber = document.getElementById("mobileNumber").value;
    var amount = document.getElementById("amount").value;

    // Perform validation (e.g., check if inputs are not empty)

    // Simulate recharge process (replace with actual backend call)
    var message = "Recharge successful. Rs. " + amount + " recharged for " + mobileNumber;
    document.getElementById("message").innerText = message;
}
