import { ethereum, clock, avatar, view } from "../assets";

export const Card = () => {
  return (
    <div className="bg-cardBg m-3 px-5 py-6 rounded-xl flex flex-col gap-3 w-[350px] ">
      <div className="w-[302px] h-[302px] self-center rounded-lg bg-[url('/image-equilibrium.jpg')] bg-center bg-cover">
        <div className="w-[302px] h-[302px] rounded-lg flex items-center justify-center cursor-pointer bg-primaryCyan bg-opacity-50 opacity-0 hover:opacity-100 duration-500 ease-out">
          <img
            src={view}
            alt="icon-view"
            className="w-[50px] h-[50px] cursor-pointer "
          />
        </div>
      </div>

      <h1 className="w-fit text-White font-outfit text-[21px] mt-2 font-semibold mx-1 cursor-pointer hover:text-primaryCyan duration-500 ease-out tracking-wide">
        Equilibrium #3429
      </h1>

      <p className="text-primarySoftBlue text font-outfit mx-1 my-1 pb-1 font-extralight">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className=" w-full flex justify-between items-center px-1 mb-[10px]">
        <p className="text-primaryCyan font-outfit text-base tracking-wide font-medium">
          <span className="flex items-center gap-[6px]">
            <img src={ethereum} alt="icon-ethereum" />
            0.041 ETH
          </span>
        </p>
        <p className=" flex items-center gap-2 font-outfit font-extralight text-primarySoftBlue">
          <span>
            <img src={clock} alt="icon-cllock" />
          </span>
          3 days left
        </p>
      </div>

      <hr className="text-linehBlue w-full h-[1px] mx-1 " />

      <div className="flex items-center font-outfit mx-[4px] my-1">
        {/* image */}

        <img
          src={avatar}
          alt="Avatar image"
          className="w-8 rounded-[50%] border-[1px] border-White object-cover mr-4"
        />

        <p className="text-base text-primarySoftBlue font-thin tracking-wide">
          Creation of{" "}
          <span className="text-White text-base font-light tracking-[0.015rem] cursor-pointer hover:text-primaryCyan duration-500 ease-out">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
