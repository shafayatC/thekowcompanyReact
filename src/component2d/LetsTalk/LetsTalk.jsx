import illustrator from "../../assets/illustration.png";
import contact from "../../assets/contact-us.png";

const LetsTalk = () => {
  return (
    <div className="pb-24" id="2d-contact">
      <div className="container mx-auto ">
        <div className="flex justify-center py-12">
          <div>
            <img className="w-[430px]" src={illustrator} />
          </div>
          <div className="animate-pulse">
            <img className="w-[120px]" src={contact} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative  border border-[#B1CC40]">
          <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#DEE2E2] px-12 py-1 text-4xl  font-bold">
              {`LET'S TALK`}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
