import { useSearchStore } from '@/store/search.ts';

const LatestDate = () => {
  const search = useSearchStore();
  const date = search.outputData;

  return (
    <div>
      <p className="text-gray-500 text-[12px] text-nowrap">{date.meta.latestfilemoddate_formatted}</p>
    </div>
  );
};

export default LatestDate;
