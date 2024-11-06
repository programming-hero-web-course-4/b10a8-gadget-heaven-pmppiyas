// wishlist.js
import toast from 'react-hot-toast';

// Get All Gadgets from LocalStorage for Wishlist
const getAllWishlist = () => {
  const allWishlist = localStorage.getItem('Wishlist');
  if (allWishlist) {
    return JSON.parse(allWishlist);
  } else {
    return [];
  }
};

// Add gadget to Wishlist in LocalStorage
const addWishlist = gadget => {
  let wishlistItems = getAllWishlist();
  const isExist = wishlistItems.find(
    item => item.product_id === gadget.product_id
  );
  if (isExist) {
    return toast.error('Already Added to Wishlist!', { duration: 2000 });
  }
  wishlistItems.push(gadget);
  localStorage.setItem('Wishlist', JSON.stringify(wishlistItems));
  toast.success('Added to Wishlist!', { duration: 2000 });
};

// Remove gadget from Wishlist in LocalStorage
const removeWishlist = productId => {
  let wishlistItems = getAllWishlist();
  wishlistItems = wishlistItems.filter(item => item.product_id !== productId);
  localStorage.setItem('Wishlist', JSON.stringify(wishlistItems));
  toast.success('Removed from Wishlist!', { duration: 2000 });
};

export { addWishlist, getAllWishlist, removeWishlist };
