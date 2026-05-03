//Adicionar Item
async function addItem (userCart, item) {
    userCart.push(item);
}


//Deletar Item
async function deleteItem (userCart, name) {
}


//Remover um Item
async function removeItem (userCart, index) {

}


//Calcular total
async function calculateTotal (userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}