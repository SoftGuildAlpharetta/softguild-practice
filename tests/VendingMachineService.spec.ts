import { getVendingItem } from "../lib/VendingMachineService";

describe("VendingMachineService", () => {
  describe("#getVendingItem", () => {
    test("invalid item should return an error property", () => {
      const result = getVendingItem(999.99, "Invalid Item");
      expect(result.error).toBeTruthy();
    });

    test("doritos should return change correctly", () => {
      const result = getVendingItem(4.50, "Doritos");
      expect(result.change).toBe(0.75);
    })
  });
});
