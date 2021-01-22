import axios from "axios";

class CryptoCurrencyService {
  private static readonly baseUrl =
    "https://api.coinranking.com/v2/coins/?limit=3";

  async getCyrptoCoins(): Promise<Array<any>> {
    const config = {
      headers: {
        "x-access-token":
          "coinranking66186ba3e59da7308bc905d563cafc64518754cc30d6770d"
      }
    };
    try {
      const result = await axios.get(CryptoCurrencyService.baseUrl, config);
      return result.data.coins;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default new CryptoCurrencyService();
