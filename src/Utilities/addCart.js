import toast from 'react-hot-toast';

// Get All Gadgets from LoaclStorage
const getAllCart = () => {
  const allcart = localStorage.getItem('AddItem');
  if (allcart) {
    const allcartParse = JSON.parse(allcart);
    return allcartParse;
  } else {
    return [];
  }
};
// Add geadget to localStorage
const addCart = gadget => {
  let addItem = getAllCart();
  const isExist = addItem.find(item => item.product_id == gadget.product_id);
  if (isExist)
    return toast.error('Allready Added This Item!', {
      duration: 2000,
    });
  addItem.push(gadget);
  localStorage.setItem('AddItem', JSON.stringify(addItem));
  toast.success('Successfully Added This Item!', {
    duration: 2000,
  });
};

// Remove gadget from localStorage by product_id
const removeCart = productId => {
  let addItem = getAllCart();
  addItem = addItem.filter(item => item.product_id !== productId); // Remove the item
  localStorage.setItem('AddItem', JSON.stringify(addItem));
  toast.success('Item removed from cart!', { duration: 2000 });
};

export { addCart, getAllCart, removeCart };
