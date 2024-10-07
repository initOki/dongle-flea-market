type TableRowDetailProps = {
  item: any;
  returnBgColor: (item: any) => string;
};

const TableRowDetail = ({ item, returnBgColor }: TableRowDetailProps) => {
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
};

export default TableRowDetail;
