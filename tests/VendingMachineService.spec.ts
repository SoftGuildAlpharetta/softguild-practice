import { VendingMachineService } from '../lib/VendingMachineService';

describe('VendingMachineService', () => {
  describe('#getVendingItem', () => {
    test('invalid item should return an error property', () => {
      const service = new VendingMachineService({
        Item1: { amount: 4, quantity: 2 },
      });
      const result = service.getVendingItemResponse({
        amount: 999.99,
        item: 'Invalid Item',
        quantity: 1,
      });
      expect(result.error).toBeTruthy();
    });

    test('doritos should return change correctly', () => {
      const service = new VendingMachineService({
        Doritos: { amount: 4.5, quantity: 5 },
      });
      const result = service.getVendingItemResponse({
        amount: 4.5,
        item: 'Doritos',
        quantity: 1,
      });
      expect(result.change).toBe(0);
    });

    test('Wasabi Peas should return correctly', () => {
      const service = new VendingMachineService({
        'Wasabi Peas': {
          quantity: 10,
          amount: 5.75,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 6.0,
        item: 'Wasabi Peas',
        quantity: 1,
      });
      expect(result.change).toBe(0.25);
    });

    test('Gum should return correctly', () => {
      const service = new VendingMachineService({
        Gum: {
          quantity: 100,
          amount: 1.0,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 1.5,
        item: 'Gum',
        quantity: 1,
      });
      expect(result.change).toBe(0.5);
    });

    test('Soda should return change correctly', () => {
      const service = new VendingMachineService({
        Soda: {
          quantity: 45,
          amount: 2.5,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 3.25,
        item: 'Soda',
        quantity: 1,
      });
      expect(result.change).toBe(0.75);
    });

    test('Cheetos should return an error for quantity', () => {
      const service = new VendingMachineService({
        Cheetos: {
          quantity: 10,
          amount: 2.5,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 5.5,
        item: 'Cheetos',
        quantity: 999999,
      });
      expect(result.error).toContain('Not enough Cheetos in stock');
    });
    test('Multiple items should return correct change.', () => {
      const service = new VendingMachineService({
        Cheetos: {
          quantity: 10,
          amount: 2.5,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 15,
        item: 'Cheetos',
        quantity: 2,
      });
      expect(result.change).toBe(10);
    });

    test('Not enough for multiple items should return an error.', () => {
      const service = new VendingMachineService({
        Cheetos: {
          quantity: 10,
          amount: 2.5,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 4.5,
        item: 'Cheetos',
        quantity: 2,
      });
      expect(result.error).toContain('Not enough money for');
    });

    test('Not enough for multiple items should return an error.', () => {
      const service = new VendingMachineService({
        Cheetos: {
          quantity: 10,
          amount: 2.5,
        },
      });
      const result = service.getVendingItemResponse({
        amount: 50,
        item: 'Cheetos',
        quantity: 5,
      });
      expect(result.change).toBe(37.5);
      const inventory = service.getInventory();
      expect(inventory.Cheetos.quantity).toBe(5);
    });
  });
});
