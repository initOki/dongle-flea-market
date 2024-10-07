import { useSearchStore } from '@/store/search';
import { useEffect } from 'react';

const Search = () => {
  const search = useSearchStore();
  const text = search.searchText;
  const outputData = search.outputData;

  const outputDataCount = () => {
    if (outputData !== null && text !== null) {
      const array = outputData.shops;

      const findOfferList: any = [];
      array.map((item: any) => {
        const offers = item.offers;
        const newOffers = Object.keys(offers).map((key) => ({
          own_name: offers[key].own_name === null ? key : offers[key].own_name,
        }));

        const filtering = newOffers.filter((offer) => offer.own_name.includes(text));

        if (filtering.length > 0) {
          findOfferList.push(filtering);
        }
      });

      return `${findOfferList.length} / ${outputData.shops.length}`;
    }
  };

  useEffect(() => {
    outputDataCount();
  }, [text]);

  return (
    <div className="flex items-center justify-center px-[12px] border-solid border-[1px] rounded-[6px]">
      <input
        className="w-full focus:outline-none py-[8px]"
        placeholder="아이템 검색"
        id="SearchItem"
        onChange={(e) => search.setSearchText(e.target.value)}
        value={text !== null ? text : ''}
        autoComplete={'off'}
      />
      <div className="flex items-center justify-end text-nowrap text-[14px] text-gray-500">{outputDataCount()}</div>
    </div>
  );
};

export default Search;
