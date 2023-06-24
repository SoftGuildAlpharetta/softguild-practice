interface VendingItem {
  quantity: number;
  amount: number;
}

interface VendingItemResponse {
  item: string;
  change?: number;
  error?: string;
}

export function getVendingItem(
  amount: number,
  item: string,
  quantity: number
): VendingItemResponse {
  const vendingItems: Record<string, VendingItem> = {
    Soda: {
      quantity: 45,
      amount: 2.5,
    },
    Gum: {
      quantity: 100,
      amount: 1.0,
    },
    Doritos: {
      quantity: 2,
      amount: 3.75,
    },
    'Wasabi Peas': {
      quantity: 10,
      amount: 5.75,
    },
    Cheetos: {
      quantity: 10,
      amount: 2.5,
    },
  };

  // Does this item exist

  const itemToVend = vendingItems[item];
  if (itemToVend === undefined) {
    return { item, error: 'No item found' };
  }

  // "Do we have it in stock"

  if (itemToVend.quantity < quantity) {
    return { item, error: 'Not enough in stock' };
  }

  // "Does the nerd have enough dosh"

  if (amount >= itemToVend.amount) {
    return { item, change: amount - itemToVend.amount };
  }
  return { item, error: `Not enough money for ${item}` };
}
