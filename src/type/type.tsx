export type ASSET = {
  id: number;
  name: string;
  symbol: string;
  blockchain: {
    code: string;
    nam: string;
  };
  contract_address: string;
  decimals: number;
  icon_address: string;
  icon_address_dark: string;
  has_history: boolean;
  network: {
    code: string;
    name: string;
  };
};

export type PRICE = {
  fiat_id: number;
  fiat_symbol: string;
  source: string;
  rate: number;
  market_cap: number;
  volume_24h: number;
  updated: number;
  history: [
    {
      rate: number;
      market_cap: number;
      volume_24h: number;
      date: number;
      seq_no: number;
    }
  ];
};
