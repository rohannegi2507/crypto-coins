export default class CryptoCoins {
  // iconType: string;
  // iconUrl: string;
  name: string;
  symbol: string;
  price: number;
  priceChange: number;

  constructor(data?: any) {
    // this.iconType = data.iconType;
    // this.iconUrl = data.iconType;
    this.name = data.name;
    this.symbol = data.iconType;
    this.price = data.price;
    this.priceChange = data.change;
  }
}
