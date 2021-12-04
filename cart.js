var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
// loop through all of the buttons inside the cart
for(var i = 0; i < removeCartItemButtons.length; i++) {
	// a variable name button set it equal to whichever element in the loop that we are in
	var button = removeCartItemButtons[i] // i will be added to it each time it goes through the array
	//addEventListener listens for the click event and once the click event happens, we want to run some code so we create a function for it
	button.addEventListener('click', function(event){ //fucntion will remove item from cart 
		var buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()
		updateCartTotal()

	})

}

// update the subtotal of our cart
// create a new function
function updateCartTotal(){
	var cartItemContainer = document.getElementsByClassName('cart-info')[0]
	var cartRows = cartItemContainer.getElementByClassName('cart-row')
	var total = 0
	for(var i = 0; i < removeCartItemButtons.length; i++) {
		var cartRow = cartRows[i]
		var priceElement = cartRow.getElementsByClassName('cart-price')[0]
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var price = parseFloat(priceElement.innerText.replace('$',''))
		var quantity = quantityElement.value
		total = total + (price * quantity)
	}
	document.getElementsByClassName('cart-total-price')[0].innerText = total
}