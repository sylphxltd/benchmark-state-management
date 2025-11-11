/**
 * Test registry for 12-shopping-cart group
 * Tests real-world shopping cart operations
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  ADD_ITEM_TO_CART: {
    name: 'Add Item to Cart',
    method: 'addItemToCart',
    execute: (store) => {
      // Add a single product to cart
      store.addItemToCart({
        id: '123',
        name: 'Product A',
        price: 29.99,
        quantity: 1
      });
    }
  },
  REMOVE_ITEM_FROM_CART: {
    name: 'Remove Item from Cart',
    method: 'removeItemFromCart',
    execute: (store) => {
      // Remove an item by ID
      store.removeItemFromCart('123');
    }
  },
  UPDATE_ITEM_QUANTITY: {
    name: 'Update Item Quantity',
    method: 'updateItemQuantity',
    execute: (store) => {
      // Increase/decrease quantity of existing item
      store.updateItemQuantity('123', 3);
    }
  },
  CALCULATE_CART_TOTAL: {
    name: 'Calculate Cart Total',
    method: 'calculateTotal',
    execute: (store) => {
      // Compute total price of all items
      const total = store.calculateTotal();
      return total;
    }
  },
  APPLY_DISCOUNT: {
    name: 'Apply Discount Code',
    method: 'applyDiscount',
    execute: (store) => {
      // Apply a discount/coupon code
      store.applyDiscount('SAVE20', 0.20); // 20% off
    }
  },
  CLEAR_CART: {
    name: 'Clear Cart',
    method: 'clearCart',
    execute: (store) => {
      // Remove all items from cart
      store.clearCart();
    }
  },
  GET_CART_ITEM_COUNT: {
    name: 'Get Cart Item Count',
    method: 'getCartItemCount',
    execute: (store) => {
      // Get total number of items (considering quantities)
      const count = store.getCartItemCount();
      return count;
    }
  },
  BULK_ADD_ITEMS: {
    name: 'Bulk Add Multiple Items',
    method: 'bulkAddItems',
    execute: (store) => {
      // Add multiple items at once (checkout flow)
      store.bulkAddItems([
        { id: '1', name: 'Product 1', price: 10, quantity: 2 },
        { id: '2', name: 'Product 2', price: 20, quantity: 1 },
        { id: '3', name: 'Product 3', price: 15, quantity: 3 }
      ]);
    }
  },
  UPDATE_SHIPPING_ADDRESS: {
    name: 'Update Shipping Address',
    method: 'updateShippingAddress',
    execute: (store) => {
      // Update delivery address
      store.updateShippingAddress({
        street: '123 Main St',
        city: 'New York',
        zip: '10001',
        country: 'USA'
      });
    }
  },
  APPLY_LOYALTY_POINTS: {
    name: 'Apply Loyalty Points',
    method: 'applyLoyaltyPoints',
    execute: (store) => {
      // Redeem loyalty/reward points
      store.applyLoyaltyPoints(500);
    }
  }
} as const satisfies Record<string, TestDefinition>;

export type ShoppingCartTestKey = keyof typeof TESTS;
