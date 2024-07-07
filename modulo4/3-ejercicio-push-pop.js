/**Exercise: Managing a Stack
Create a program that simulates a stack using the push and pop methods. The stack should
store a collection of books. Users can perform the following actions:
1. Add a new book to the top of the stack.
2. Remove the book from the top of the stack.
3. Display the current stack of books.
Implement a loop that allows users to interact with the stack until they choose to exit.
 */

// Solution
let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_TO_CART_ACTION = 'removeFromCart'
const VIEW_TO_CART_ACTION = 'viewCart'

function viewCart () {
    console.log('Books in the cart: ', bookCart)
}

function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            console.log(bookCart)
        break;
        case REMOVE_TO_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove')
            } else {
                const removeBook = bookCart.pop()
                console.log(`Remove book from the cart: ${removeBook}`)
            }
        break;
        case VIEW_TO_CART_ACTION:
            viewCart()
        break;
        default:
            console.log('Invalid action. Please choose valid action')
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Book 1')
performCartActions(VIEW_TO_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Book 2')
performCartActions(ADD_TO_CART_ACTION, 'Book 3')
performCartActions(VIEW_TO_CART_ACTION)
performCartActions(REMOVE_TO_CART_ACTION)
performCartActions(VIEW_TO_CART_ACTION)