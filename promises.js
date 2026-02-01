// callback hell

const cart = ["shoes", "shirt", "towel"];

// placeOrder, paymentDone , fetchOrderSummary, backtoMainPage

placeOrder(function(){
    paymentDone(function(){
        fetchOrderSummary(function(){
            backtoMainPage();
        })
    })
})

// promises

const order = createOrder(cart); //orderId

paymentDone(orderId) // paymentStatus

orderSummary(paymentStatus) 

backtoMainPage();


order.then(() => paymentDone())
.then(() => orderSummary())
.then(() => backtoMainPage())
.catch((err) => console.log(err))


//How to create a promise

function createOrder(){
    const p =  new Promise((resolve, reject) => {
        setTimeout(() => resolve("12345"), 5000 ) 
    })
    return p;
}


function paymentDone(orderId){
    return true;
}

function orderSummary(paymentStatus){
    const error = new Error("This is an error");
    if(paymentStatus === true){
        return "run this code"
    } else throw error;

}


//promise chaining

createOrder().then(() => paymentDone())
.then((paymentStatus) => orderSummary(paymentStatus))
.then((val) => console.log(val))
.catch((err) => console.log(err.message))


//Promise APIs

const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 completed"), 3000);
  setTimeout(() => reject("P1 Failed"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P2 completed"), 1000)
  setTimeout(() => reject("P2 Failed"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("P3 completed"), 2000);
    setTimeout(() => reject("P3 Failed"), 2000);
});

// promise.all()

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err.errors))
