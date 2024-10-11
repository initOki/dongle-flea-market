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
            <div
              className="border-solid border-[1px] border-[#ECECEC] rounded-[6px] px-[14px] py-[16px] mb-[20px]"
              style={{
                boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
              }}
            >
              <div className="flex items-center justify-between border-b-[1px] border-solid border-[#CCCCCC] mb-[15px] pb-[10px]">
                <p className="text-[24px] text-[#FFB046] font-bold">{item.shop_name}</p>
                <div>
                  <p className="text-right">{item.owner_name}</p>
                  <p className="text-[12px] text-gray-500">
                    {item.location
                      ? `x: ${item.location.x} y: ${item.location.y} z: ${item.location.z}`
                      : '위치를 알 수가 없어요😓'}
                  </p>
                </div>
              </div>

              <div>
                <div className="w-full grid grid-flow-col justify-between px-[12px] py-[14px] border-solid border-b-[2px] border-[#ECECEC]">
                  <div className="text-[14px] text-center w-[300px] font-bold">아이템</div>
                  <div className="text-[14px] text-right w-[120px] font-bold">수량</div>
                  <div className="text-[14px] text-right w-[120px] font-bold">가격</div>
                  <div className="text-[14px] text-right w-[120px] font-bold">개당 가격</div>
                  <div className="text-[14px] text-right w-[50px] font-bold">재고</div>
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
