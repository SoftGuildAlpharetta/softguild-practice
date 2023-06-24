import { getVendingItem } from '../lib/VendingMachineService';

describe('VendingMachineService', () => {
  describe('#getVendingItem', () => {
    test('invalid item should return an error property', () => {
      const result = getVendingItem(999.99, 'Invalid Item', 0);
      expect(result.error).toBeTruthy();
    });

    test('doritos should return change correctly', () => {
      const result = getVendingItem(8.5, 'Doritos', 2);
      expect(result.change).toBe(1.0);
    });

    test('Wasabi Peas should return correctly', () => {
      const result = getVendingItem(12.0, 'Wasabi Peas', 2);
      console.log(result);
      expect(result.change).toBe(0.5);
    });

    test('Gum should return correctly', () => {
      const result = getVendingItem(1.5, 'Gum', 1);
      expect(result.change).toBe(0.5);
    });

    test('Soda should return change correctly', () => {
      const result = getVendingItem(3.25, 'Soda', 1);
      expect(result.change).toBe(0.75);
    });

    test('Cheetos should return an error for quantity', () => {
      const result = getVendingItem(5.5, 'Cheetos', 999999);
      expect(result.error).toContain('Not enough in stock');
    });

    test('Multiple items should return correct change.', () => {
      const result = getVendingItem(15, 'Cheetos', 2);
      expect(result.change).toBe(10);
    });

    test('Not enough for multiple items should return an error.', () => {
      const result = getVendingItem(4.5, 'Cheetos', 2);
      expect(result.error).toContain('Not enough money for');
    });
  });
});
