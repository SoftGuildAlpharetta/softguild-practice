// TODO: Implement a cash box!
export class CashboxService {
  private _total: number; // 135

  constructor(total: number) {
    this._total = total;
  }

  public getTotal() {
      return this._total;
  }

  public setTotal(newTotal: number) {
    this._total = newTotal;
  }
}
