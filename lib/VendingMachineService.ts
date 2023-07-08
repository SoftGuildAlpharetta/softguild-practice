import { CashboxService } from "./CashboxService";

interface VendingItem {
  quantity: number;
  amount: number;
}

interface VendingItemResponse {
  item: string;
  change?: number;
  error?: string;
}

interface VendingItemRequest {
  amount: number;
  item: string;
  quantity: number;
}

export class VendingMachineService {
  private _inventory: Record<string, VendingItem>;
  private _cashbox: CashboxService;
  constructor(inventory: Record<string, VendingItem>, total: number = 500) {
    this._inventory = inventory;
    this._cashbox = new CashboxService(total);
  }

  public updateInventory(itemName: string, inventoryItem: VendingItem) {
    this._inventory[itemName] = inventoryItem;
  }

  public setInventory(inventory: Record<string, VendingItem>) {
    this._inventory = inventory;
  }

  public getInventory() {
    return this._inventory;
  }

  public getCashBox() {
    return this._cashbox;
  }

  public getVendingItemResponse(
    request: VendingItemRequest
  ): VendingItemResponse {
    const { item, amount, quantity } = request;
    // Does this item exist

    const itemToVend = this._inventory[item];
    if (itemToVend === undefined) {
      return { item, error: "No item found" };
    }

    // "Do we have it in stock"

    if (itemToVend.quantity < quantity) {
      return { item, error: `Not enough ${item} in stock` };
    }

    // "Does the nerd have enough dosh"

    const grandTotalOfRequestedItems = itemToVend.amount * quantity;

    if (amount >= grandTotalOfRequestedItems) {
      this._cashbox.addTotal(itemToVend.amount);
      itemToVend.quantity = itemToVend.quantity - quantity;
      const changeAmount = amount - grandTotalOfRequestedItems;
      // Subtract from the Cashbox.
      this._cashbox.subtractTotal(changeAmount);
      return { item, change: changeAmount };
    }
    return { item, error: `Not enough money for ${item}` };
  }
}
