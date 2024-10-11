type TableRowDetailProps = {
  item: any;
  returnBgColor: (item: any) => string;
  returnTextBgColor: (item: any) => string;
};

const TableRowDetail = ({ item, returnBgColor, returnTextBgColor }: TableRowDetailProps) => {
  return (
    <div
      className={`w-full grid grid-flow-col justify-between px-[12px] py-[12px] border-solid border-b-[1px] border-[#ECECEC] ${returnBgColor(item)}`}
      key={item.own_name}
    >
      <div className={`text-[13px] text-left w-[300px] `}>
        <span className={`${returnTextBgColor(item)}`}>{item.own_name}</span>
      </div>
      <div className="text-[13px] text-right w-[120px]">{item.amount}</div>
      <div className="text-[13px] text-right w-[120px]">{`${item.price.toLocaleString()} 냥`}</div>
      <div className="text-[13px] text-right w-[120px]">{`${item.unit_price.toLocaleString()} 냥`}</div>
      <div className="text-[13px] text-right w-[50px]">{item.stock}</div>
    </div>
  );
};

export default TableRowDetail;
