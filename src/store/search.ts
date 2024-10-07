import { create } from 'zustand';
import OutputData from '@/data/output.json';

type SearchStore = {
  searchText: string | null;
  outputData: any;
  offerList: any;
  shopList: any;
  setSearchText: (searchText: string) => void;
  setOfferList: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchText: null,
  outputData: OutputData,
  offerList: [],
  shopList: [],
  setSearchText: (searchText) => {
    set(() => ({ searchText: searchText === '' ? null : searchText }));
  },
  setOfferList: () => {
    const offers: any = [];
    const shopList = OutputData.shops;
    const array = OutputData.shops;
    array.map((item: any) => {
      const newOffers = Object.keys(item.offers).map((key) => ({
        name: key,
        own_name: item.offers[key].own_name === null ? key : item.offers[key].own_name,
        item: item.offers[key].item,
        amount: item.offers[key].amount,
        exchange_item: item.offers[key].exchange_item,
        price: item.offers[key].price,
        price_discount: item.offers[key].price_discount,
        unit_price: item.offers[key].unit_price,
        stock: item.offers[key].stock,
        is_best_price: item.offers[key].is_best_price,
      }));

      offers.push(newOffers);
    });
    set(() => ({ offerList: offers, shopList: shopList }));
  },
}));
