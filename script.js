document.getElementById('billForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const consumerName = document.getElementById('consumerName').value;
    const units = parseFloat(document.getElementById('units').value);
    const rate = parseFloat(document.getElementById('rate').value);
  
    const total = units * rate;
  
    const receipt = 
  `---- ELECTRICITY BILL ----
  Consumer Name : ${consumerName}
  Units Consumed: ${units}
  Rate per Unit : ₹${rate.toFixed(2)}
  ----------------------------
  Total Bill    : ₹${total.toFixed(2)}`;
  
    document.getElementById('receiptContent').textContent = receipt;
    document.getElementById('receipt').style.display = 'block';
  
    document.getElementById('billForm').reset();
  });
  