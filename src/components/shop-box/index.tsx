import ShopBoxTableRow from './table-row';
import { useSearchStore } from '@/store/search.ts';
import { useEffect } from 'react';

const ShopBox = () => {
  const search = useSearchStore();
  const searchText = search.searchText;
  const shopList = search.shopList;

  useEffect(() => {
    search.setOfferList();
  }, []);

  return (
    <>
      {shopList.map((item: any) => {
        const offers = Object.keys(item.offers).map((key) => ({
          own_name: item.offers[key].own_name === null ? key : item.offers[key].own_name,
        }));

        const someOffer = offers.some((item) => item.own_name.includes(searchText));

        if (someOffer || searchText === '' || searchText === null) {
          return (
            <div className="border-solid border-[1px] border-[#ECECEC] rounded-[6px] px-[14px] py-[16px] mb-[20px]">
              <div className="flex items-center justify-between border-b-[1px] border-solid border-[#CCCCCC] mb-[15px] pb-[10px]">
                <p className="text-[24px] text-[#FFB046] font-bold">{item.shop_name}</p>
                <p>{item.owner_name}</p>
              </div>

              <div>
                <div className="w-full grid grid-flow-col justify-between px-[12px] py-[14px] border-solid border-b-[1px] border-[#ECECEC]">
                  <div className="text-[15px] text-center w-[300px] font-bold">아이템</div>
                  <div className="text-[15px] text-right w-[120px] font-bold">수량</div>
                  <div className="text-[15px] text-right w-[120px] font-bold">가격</div>
                  <div className="text-[15px] text-right w-[120px] font-bold">개당 가격</div>
                  <div className="text-[15px] text-right w-[50px] font-bold">재고</div>
                </div>
                <div>
                  <ShopBoxTableRow shop={item} />
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default ShopBox;
