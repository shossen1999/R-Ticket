let ct = 1;
let totalAmount = 0;


const seatAll = document.querySelectorAll('.seat');
for( let i= 0; i < seatAll.length; i++ ){
    const seatPos = seatAll[i];
    seatPos.addEventListener("click", function(){
    if (seatPos.classList.contains('disabled')==false) {
        if (ct <= 4) {
        ct++;
        seatPos.style.backgroundColor = '#1DD100';
        const title = seatPos.querySelector('h5').innerText;
    
        const seatName = document.getElementById('seat-name');
        const p = document.createElement('p');
        p.innerText = title;
        seatName.appendChild(p);
       
        if( ct > 5){
            seatPos.classList.add('disabled');
            alert('Sorry!No more than 4');
        }
        const SeatCategory = document.getElementById('seat-cat');
        const seatValue= document.createElement('p');
        seatValue.innerText = "economy";
        SeatCategory.appendChild(seatValue);
        const seatVal = document.getElementById('seat-val');
        const seatPriceVal = document.createElement('p');
        seatPriceVal.innerText = 550;
        const price = parseFloat(seatVal.appendChild(seatPriceVal).innerText);
        totalAmount += price;
         document.getElementById('total-price').innerText = totalAmount;
        document.getElementById('grand-total').innerText = totalAmount;
        const selectedSeats = document.getElementById('selected-seats');
        const seatCount = selectedSeats.innerText;
        const totalSelectedSeats = parseInt(seatCount);  
        const totalSeat = totalSelectedSeats + 1;
        console.log("seat count",totalSeat)
        selectedSeats.innerText = totalSeat;
        const bookedSeatAll = document.getElementById('Booked-seat');
        const bookedSeat = bookedSeatAll.innerText;
        const reservedSeat = parseInt(bookedSeat);
        const reservedSeats = reservedSeat - 1;

        console.log("seat count", reservedSeats)
       
         bookedSeatAll.innerText = reservedSeats;
    }  else  {alert('Sorry!No more than 4.');}
}
else {
    alert('Seat is selected!');
}
seatPos.removeEventListener('click',arguments.callee); 
});
}

// formation

const phoneNumber = document.getElementById('phoneNumber');
const nextButton = document.getElementById('next-btn');
const seats = document.querySelectorAll('.seat');
nextButton.disabled = true;

phoneNumber.addEventListener('input', checkInputs);
for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', checkInputs);
}

function checkInputs() {
    
    const isPhoneNumberGiven = phoneNumber.value.trim() !== '';
    let isSeatSelected = false;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i].style.backgroundColor === 'rgb(29, 209, 0)') {
            isSeatSelected = true;
            break;
        }
    }
    nextButton.disabled = !(isPhoneNumberGiven && isSeatSelected);
}


nextButton.addEventListener('click', function(event) {
    if (nextButton.disabled) {
        event.preventDefault();
        alert('Please select a seat and provide your phone number before proceeding.');
    }
});


// formation end
document.getElementById('couponBtn').addEventListener('click', applyCoupon);

function applyCoupon() {
    const couponField = document.getElementById('coupon');
    const couponValue = couponField.value;
    const discountElement = document.getElementById('discount-price');
    const totalElement = document.getElementById('total');

    if (totalAmount >= 550) {
        let discountPercentage = 0;
        if (couponValue === "NEW15") {
            discountPercentage = 0.15;
        } else if (couponValue === "Couple 20") {
            discountPercentage = 0.20;
        } else {
            console.log("Invalid Coupon");
            return;
        }

        const discountAmount = totalAmount * discountPercentage;
        const remainingTotal = totalAmount - discountAmount;

        document.getElementById('couponBtn').classList.add("hidden");
        couponField.classList.add("hidden");
        discountElement.innerText = "BDT " + discountAmount;
        totalElement.innerText = "BDT " + remainingTotal;
        couponField.value = "";
    } else {
        alert('Please Select Seat!');
    }
}




const modalBtn = document.getElementById('next-btn');
modalBtn.addEventListener('click', function(event) {
    if (totalAmount >= 550) {
        
    } else {
       
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <span>Please buy 1 ticket first.</span>
            <span class="rmv-btn" onclick="this.parentElement.remove();">&times;</span>
        `;
    }
});
 
