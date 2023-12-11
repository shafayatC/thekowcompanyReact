import CircleStyle2d from "./CircleStyle2d";

const Record2d = () => {
  return (
    <div className="bg-white pb-6">
      <div className="bg-[#dee2e2] h-[200px]"></div>
      <div>
        <div className="container mx-auto">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-24 md:gap-0 md:grid-cols-4 justify-items-center -mt-24">
              <CircleStyle2d
                count="18M"
                title="IMAGE PRODUCTION"
                recordTime="2020-21"
              />
              <CircleStyle2d
                count="40K"
                title="IMAGE PRODUCTION"
                recordTime="PER DAY"
              />
              <CircleStyle2d
                count="9.2K"
                title="VIDEO PRODUCTION"
                recordTime="2020-21"
              />
              <CircleStyle2d
                count="54K"
                title="VIDEO PRODUCTION"
                recordTime="FIVE YEARS"
              />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-12">
          <div className="relative  border border-[#B1CC40]">
            <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-white px-12 py-1 text-4xl  font-bold text-center">
                {`SUCCESS RECORD`}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record2d;
