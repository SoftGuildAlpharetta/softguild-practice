// TODO: Implement a cash box!
export class CashboxService {
  private _total: number; // 135

  public subtractTotal(subtractTotal: number) {
    this._total = this._total - subtractTotal;
  }

  public checkTotal(checkTotal: number) {
    return this._total >= checkTotal;
  }

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
