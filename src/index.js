// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  console.log(price);
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity);
  let newSubtotal=price*quantity;
  console.log(newSubtotal);
  product.querySelector('.subtotal span').innerHTML=newSubtotal;
  return newSubtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  console.log(products)
  for (let index = 0; index < products.length; index++) {
    updateSubtotal(products[index]);
    
  }

  // ITERATION 3
  //... your code goes here
  let newTotal=0;
  for (let index = 0; index < products.length; index++) {
    newTotal=newTotal+updateSubtotal(products[index]);
    
  }
  console.log(newTotal)
  document.querySelector('#total-value span').innerHTML=newTotal;
 }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  toRemove=target.parentNode.parentNode;
  toRemove.parentNode.removeChild(toRemove);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeBtn=document.getElementsByClassName('btn btn-remove');
  console.log(removeBtn)
  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener('click',removeProduct)
    
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click',createProduct);


  //... your code goes here
});
