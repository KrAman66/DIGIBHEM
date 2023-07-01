document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var customerName = document.getElementById('customer-name').value;
    var checkInDate = document.getElementById('check-in-date').value;
    var numberOfDays = parseInt(document.getElementById('total-days').value);
    var numberOfPeople = parseInt(document.getElementById('total-persons').value);
    var roomTypeElement = document.querySelector('input[name="roomType"]:checked');
    var roomType = roomTypeElement ? roomTypeElement.value : '';
    var amenitiesElements = document.querySelectorAll('input[name="amenities"]:checked');
    var amenities = Array.from(amenitiesElements).map(function(amenity) {
      return amenity.value;
    });
    var advanceAmount = parseFloat(document.getElementById('advance-amount').value);
  
    var roomCost = 0;
    if (roomType === "Deluxe-Room") {
      roomCost = 2500;
    } else if (roomType === "Suite-Room") {
      roomCost = 4000;
    }
  
    var amenitiesCost = 0;
    for (var i = 0; i < amenities.length; i++) {
      if (amenities[i] === "A/C") {
        amenitiesCost += 1000;
      } else if (amenities[i] === "Locker") {
        amenitiesCost += 300;
      }
    }
  
    var totalCost = ((roomCost + amenitiesCost) * numberOfDays) + ((numberOfPeople - 2) * 1000 * numberOfDays);
    var balanceLeft = totalCost - advanceAmount;
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '<h3>Registration Details:</h3>' +
      '<p><strong>Customer Name:</strong> ' + customerName + '</p>' +
      '<p><strong>Check-in Date:</strong> ' + checkInDate + '</p>' +
      '<p><strong>Number of People:</strong> ' + numberOfPeople + '</p>' +
      '<p><strong>Number of Days:</strong> ' + numberOfDays + '</p>' +
      '<h3>Room Information:</h3>' +
      '<p><strong>Room Type:</strong> ' + roomType + '</p>' +
      '<h3>Amenities:</h3>' +
      '<p><strong>Selected Amenities:</strong> ' + amenities.join(", ") + '</p>' +
      '<h3>Payment Details:</h3>' +
      '<p><strong>Advance Amount:</strong> ' + advanceAmount.toFixed(2) + '</p>' +
      '<p><strong>Room Cost:</strong> ' + roomCost.toFixed(2) + '</p>' +
      '<p><strong>Amenities Cost:</strong> ' + amenitiesCost.toFixed(2) + '</p>' +
      '<p><strong>Total Cost:</strong> ' + totalCost.toFixed(2) + '</p>' +
      '<p><strong>Balance Left to Pay:</strong> ' + balanceLeft.toFixed(2) + '</p>';
  
    resultElement.style.display = 'block';
    resultElement.scrollIntoView({ behavior: 'smooth' });
  });
  