import { useSearchStore } from '@/store/search';
import { useEffect, useState } from 'react';

type ShopBoxTableRowProps = {
  shop: any;
};

const ShopBoxTableRow = ({ shop }: ShopBoxTableRowProps) => {
  const search = useSearchStore();
  const text = search.searchText;
  const [offerList, setOfferList] = useState<any>([]);

  const returnBgColor = (item: any) => {
    if (item.stock === 0) {
      return 'bg-red-50';
    } else if (item.own_name.includes(text)) {
      return 'bg-blue-50';
    }
    return '';
  };

  const createOfferList = () => {
    const offers = Object.keys(shop.offers).map((key) => ({
      name: key,
      own_name: shop.offers[key].own_name === null ? key : shop.offers[key].own_name,
      item: shop.offers[key].item,
      amount: shop.offers[key].amount,
      exchange_item: shop.offers[key].exchange_item,
      price: shop.offers[key].price,
      price_discount: shop.offers[key].price_discount,
      unit_price: shop.offers[key].unit_price,
      stock: shop.offers[key].stock,
      is_best_price: shop.offers[key].is_best_price,
    }));

    setOfferList(offers);
  };

  useEffect(() => {
    createOfferList();
  }, []);

  if (offerList.length === 0) {
    return (
      <div className="flex justify-center py-[20px]">
        <p>등록된 아이템이 없어요..😓</p>
      </div>
    );
  }

  if (text === '' || text === null) {
    return (
      <>
        {offerList.map((item: any) => {
          if (item.price !== 0 && item.unit_price !== 0) {
            return (
              <div
                className={`w-full grid grid-flow-col justify-between px-[12px] py-[12px] ${returnBgColor(item)}`}
                key={item.own_name}
              >
                <div className="text-[13px] text-left w-[300px]">{item.own_name}</div>
                <div className="text-[13px] text-right w-[120px]">{item.amount}</div>
                <div className="text-[13px] text-right w-[120px]">{`${item.price.toLocaleString()} 냥`}</div>
                <div className="text-[13px] text-right w-[120px]">{`${item.unit_price.toLocaleString()} 냥`}</div>
                <div className="text-[13px] text-right w-[50px]">{item.stock}</div>
              </div>
            );
          }
        })}
      </>
    );
  } else {
    return (
      <>
        {offerList.map((item: any) => {
          if (item.own_name.includes(text)) {
            return (
              <div
                className={`w-full grid grid-flow-col justify-between px-[12px] py-[12px] ${returnBgColor(item)}`}
                key={item.own_name}
              >
                <div className="text-[13px] text-left w-[300px]">{item.own_name}</div>
                <div className="text-[13px] text-right w-[120px]">{item.amount}</div>
                <div className="text-[13px] text-right w-[120px]">{`${item.price.toLocaleString()} 냥`}</div>
                <div className="text-[13px] text-right w-[120px]">{`${item.unit_price.toLocaleString()} 냥`}</div>
                <div className="text-[13px] text-right w-[50px]">{item.stock}</div>
              </div>
            );
          }
        })}
      </>
    );
  }
};

export default ShopBoxTableRow;
