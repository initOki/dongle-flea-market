import { useSearchStore } from '@/store/search';
import { useEffect, useState } from 'react';
import TableRowDetail from '@/components/shop-box/table-row-detail.tsx';

type ShopBoxTableRowProps = {
  shop: any;
};

const ShopBoxTableRow = ({ shop }: ShopBoxTableRowProps) => {
  const search = useSearchStore();
  const text = search.searchText;
  const inStock = search.inStock;
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
            if (inStock) {
              if (item.stock !== 0) {
                return <TableRowDetail item={item} returnBgColor={returnBgColor} />;
              }
            } else {
              return <TableRowDetail item={item} returnBgColor={returnBgColor} />;
            }
          }
        })}
      </>
    );
  } else {
    return (
      <>
        {offerList.map((item: any) => {
          if (inStock) {
            if (item.stock !== 0) {
              if (item.own_name.includes(text)) {
                return <TableRowDetail item={item} returnBgColor={returnBgColor} />;
              }
            }
          } else {
            return <TableRowDetail item={item} returnBgColor={returnBgColor} />;
          }
        })}
      </>
    );
  }
};

export default ShopBoxTableRow;
