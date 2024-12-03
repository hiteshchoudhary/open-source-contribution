const cart = ['shoes','pants','kurta'];

// Createorder, proceedtopayment, ShoworderSummary, Updatewalletbalance
Createorder(cart)
  .then((orderid) => {
    console.log(orderid);
    return orderid;
  })
  .then((orderid) => {
    return Proceedtopayment(orderid);
  })
  .then(({ message, amount }) => { // Destructure message and amount
    console.log(message, 'of amount', amount);
    return ShoworderSummary(amount);
  })
  .then(({ message, amount }) => { // Destructure message and amount
    console.log(message, amount);
    return Updatewalletbalance(amount);
  })
  .then(({ message, balanceamount }) => { // Destructure message and balanceamount
    console.log(message, balanceamount);
  })
  .catch(function (error) {
    console.log(error);
  });

function Createorder(cart) {
  const pr = new Promise((resolve, reject) => {
    // createorder, validatecart, orderid
    if (!validatecart(cart)) {
      const err = new Error('Cart is not valid');
      reject(err);
    }

    // logic for createorder
    const orderid = '2345678';
    if (orderid) {
      setTimeout(() => {
        resolve(orderid);
      }, 2000);
    }
  });

  return pr;
}

function Proceedtopayment(orderid) {
  return new Promise((resolve, reject) => {
    resolve({ message: `Payment Successful to orderid:${orderid}`, amount: 4000 });
  });
}

function ShoworderSummary(amount) {
  return new Promise((resolve, reject) => {
    if (amount >= 2000) {
      resolve({ message: `You have ordered items that cost RS`, amount });
    } else {
      reject(new Error('Buy more items for Extra discount'));
    }
  });
}

function Updatewalletbalance(amount) {
  return new Promise((resolve, reject) => {
    let walletbalance = 10000;
    if (amount < walletbalance) {
      resolve({ message: 'Your wallet balance is', balanceamount: walletbalance - amount });
    } else {
      reject(new Error('Your wallet balance is zero'));
    }
  });
}

function validatecart(cart) {
  return true; // Simplified for this example
}