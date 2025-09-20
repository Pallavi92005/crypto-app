document.getElementById("submitBtn").addEventListener("click", function () {
    let symbol = document.getElementById("crypto").value.toUpperCase();

    // API call (Crypto API docs: https://docs.cryptapi.io/api/ticker)
    fetch(`https://api.cryptapi.io/${symbol}/ticker/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Show crypto details
            document.getElementById("cryptoName").innerHTML = "Symbol: " + symbol;
            document.getElementById("price").innerHTML = "Price (USD): $" + data.price_usd;
            document.getElementById("change").innerHTML = "Change (24h): " + data.change_24h + "%";
            document.getElementById("volume").innerHTML = "Volume (24h): " + data.volume_usd;
        })
        .catch(err => {
            console.error(err);
            document.getElementById("cryptoName").innerHTML = "Error: Invalid crypto symbol or API issue.";
        });
});
