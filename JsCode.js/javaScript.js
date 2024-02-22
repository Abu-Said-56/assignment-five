
// modal for next button
function showSuccess(){
    const modalDiv = document.getElementById('next_btn_modal');
    modalDiv.showModal();
}
// seat select part

let count = 0;

//
const seat = document.getElementsByClassName('busSeatsNumber');

const ClickedSeatButton = new Array(seat.length).fill(false);
//console.log(seat)
for (let i =0; i< seat.length; i++){

    seat[i].addEventListener('click',function(event){

if( count < 4){
    if(!ClickedSeatButton[i]){
ClickedSeatButton[i] = true ;

        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';

const cureentSelectSeat = getValueOfNumByID('selected_seat');
const increSeatNum = cureentSelectSeat + 1 ;

setValuByID('selected_seat',increSeatNum);

const currecntAvialableSeat = getValueOfNumByID('Available_seat');
const decreAviableSeat = currecntAvialableSeat - 1;
setValuByID('Available_seat',decreAviableSeat);

//create & apend

const clickedValue = event.target.innerText;
 const appendPlace = document.getElementById('apend-place');
 const div = document.createElement('div');
 div.className = `flex justify-between p-3`;
 appendPlace.appendChild(div);

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

p1.innerText = ` ${clickedValue} `;
p2.innerText = `Economy` ;
p3.innerText = `550`;


div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

//total price

const totalTk = getValueOfNumByID('Total_tk');
const currentTotal = totalTk + 550 ;
setValuByID('Total_tk',currentTotal);
//grand price
const grandPrice = getValueOfNumByID('grand_tk');
const currentGrandTK = grandPrice + 550 ;
setValuByID('grand_tk',currentGrandTK);

count++;}

}else{
    alert(`You already selecte 4 seat`);
}

    })

}
//dicount part

function dicountByCoupon(){

    const inputTextValue = document.getElementById('input_coupon').value ;

    if( inputTextValue === 'NEW15'){
        const currentGrandPrice = getValueOfNumByID('grand_tk');
        const discountPrice = currentGrandPrice * 0.15 ;
        const afterDisPrice = currentGrandPrice - discountPrice ;
        setValuByID( 'grand_tk' ,afterDisPrice)

        const disParentDiv = document.getElementById('Dicount_div')
        disParentDiv.classList.add('hidden');

    }else if( inputTextValue === 'Couple 20'){
        const currentGrandPrice = getValueOfNumByID('grand_tk');
        const discountPrice = currentGrandPrice * 0.20 ;
        const afterDisPrice = currentGrandPrice - discountPrice ;
        setValuByID( 'grand_tk' ,afterDisPrice)

        const disParentDiv = document.getElementById('Dicount_div')
        disParentDiv.classList.add('hidden');

    }else{
        alert ('Please input Valid Coupon');

    }

}


//function part
function getValueOfNumByID(event){
    const seatNumberElement = document.getElementById(event);
    const seatNumberText = seatNumberElement.innerText;
    const seatNumber = parseInt(seatNumberText);
    console.log('seat number : ',seatNumber)
    return seatNumber;
}

function setValuByID(eventID,eventValue){
    const targetLocation = document.getElementById(eventID);
    targetLocation.innerText = eventValue ;
}