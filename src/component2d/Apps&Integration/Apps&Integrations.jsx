import shopify from "../../assets/shopify.png";
import amazon from "../../assets/amazon.png";
import cutoutwiz from "../../assets/cutoutwiz.png";
import bigCommarce from "../../assets/bigcommerce.png";

const Integrations = () => {
  return (
    <div className="bg-[#B1CC40] py-20">
      <div className="container mx-auto">
        <div className="flex justify-center items-center ">
          <div className="w-[200px] border-r py-2 px-6 border-[#B5BCA1]">
            <img src={shopify} />
          </div>
          <div className="w-[200px] border-r pt-5 px-6 border-[#B5BCA1]">
            <img src={amazon} />
          </div>
          <div className="w-[200px] border-r px-6 py-2 border-[#B5BCA1]">
            <img src={cutoutwiz} />
          </div>
          <div className="w-[200px] px-6">
            <img src={bigCommarce} />
          </div>
        </div>
      </div>
      <div className="pt-28">
        <div className="relative  border border-white">
          <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#B1CC40] px-12 py-1 text-4xl  font-bold">
              {`APPS & INTEGRATION`}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Integrations;