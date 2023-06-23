import { getVendingItem } from "../lib/VendingMachineService";

describe("VendingMachineService", () => {
  describe("#getVendingItem", () => {
    test("invalid item should return an error property", () => {
      const result = getVendingItem(999.99, "Invalid Item", 0);
      expect(result.error).toBeTruthy();
    });

    test("doritos should return change correctly", () => {
      const result = getVendingItem(4.50, "Doritos", 2);
      expect(result.change).toBe(0.75);
    });

    test("Wasabi Peas should return correctly", () => {
      const result = getVendingItem(6.00, "Wasabi Peas", 5);
      expect(result.change).toBe(0.25);

    });

    test("Gum should return correctly", () => {
      const result = getVendingItem(1.50, "Gum", 100);
      expect(result.change).toBe(0.50);
    });

    test("Soda should return change correctly", () => {
      const result = getVendingItem(3.25, "Soda", 45);
      expect(result.change).toBe(0.75);
    })


  });
});
