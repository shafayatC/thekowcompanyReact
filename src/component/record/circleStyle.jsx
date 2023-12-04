const CircleStyle = ({count, title}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="p-6 bg-kow-green rounded-full z-20 relative">
          <div className="rounded-full">
            <div className="shadow-2xl w-[130px] h-[130px] flex bg-[#f9f9f9] rounded-full items-center justify-center">
              <h5 className="text-4xl font-semibold">
                {count}
              </h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center relative top-[42px] z-10 gap-3">
          <div className="absolute -top-[70px] bg-[#666666] w-[1px] h-[70px]"></div>
          <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
            <div className="bg-kow-green p-2 rounded-full"></div>
          </div>
          <div>
            <h5 className="uppercase text-lg font-medium">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleStyle;
