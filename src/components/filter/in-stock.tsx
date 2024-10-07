import { useSearchStore } from '@/store/search.ts';

const InStock = () => {
  const search = useSearchStore();
  const handleInStock = () => {
    search.setInStock();
  };

  return (
    <div className="flex items-center">
      <input
        className="mr-[5px] w-[16px] h-[16px]"
        type="checkbox"
        id="in-stock"
        name="in-stock"
        onChange={handleInStock}
      />
      <label htmlFor="in-stock" className="text-[14px]">
        재고가 있는 상품만 볼게요!
      </label>
    </div>
  );
};

export default InStock;
