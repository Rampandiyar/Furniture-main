import Return from "../assets/Return.png";
import Support from "../assets/Support.png";
import Truck from "../assets/Truck.png";
import Shop from "../assets/Shop.png";
import Mask from "../assets/Mask.png";
import dot from "../assets/Dot.png";
export default function About() {
  return (
    <div className="flex lg:pt-40 xs:pt-20 lg:px-20 xs:px-5 pr-2 bg-gray-100">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div>
            <h1 className="font-poppins font-bold lg:text-2xl xs:text-lg ">
              Why Choose <br /> Us
            </h1>
            <p className="xs:text-[10px] lg:text-base">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla{" "}
              <br />
              vivethe as it was for us to know what was to be done. the
            </p>
          </div>
          <div>
            <div className="flex xs:pt-4">
              <div className="lg:pt-5 ">
                <img src={Truck} alt="" className="h-6" />
                <h1 className="pt-2 lg:text-lg xs:text-[13px] font-poppins font-semibold">
                  Fast & Free <br /> Shipping{" "}
                </h1>
                <p className="xs:text-[10px] lg:text-base">
                  Donec mattis porta eros, aliquet <br /> finibus risus interdum
                  at. Nulla <br /> vivethe as it was
                </p>
              </div>
              <div className="lg:pt-5 px-8">
                <img src={Shop} alt="" className="h-6" />
                <h1 className="pt-2 lg:text-lg xs:text-[13px] font-poppins font-semibold">
                  Easy to <br /> Shop{" "}
                </h1>
                <p className="xs:text-[10px] lg:text-base">
                  Donec mattis porta eros, aliquet <br /> finibus risus interdum
                  at. Nulla <br /> vivethe as it was
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="lg:pt-5">
                <img src={Support} alt="" className="lg:h-6" />
                <h1 className="pt-2 lg:text-lg xs:text-[13px] font-poppins font-semibold">
                  24/7 <br /> Support{" "}
                </h1>
                <p className="xs:text-[10px] lg:text-base">
                  Donec mattis porta eros, aliquet <br /> finibus risus interdum
                  at. Nulla <br /> vivethe as it was
                </p>
              </div>
              <div className="lg:pt-5 lg:px-8 xs:pl-8 ">
                <img src={Return} alt="" className="h-6" />
                <h1 className="pt-2 lg:text-lg xs:text-[13px] font-poppins font-semibold">
                  Hassle Free <br /> Returns{" "}
                </h1>
                <p className="xs:text-[10px] lg:text-base">
                  Donec mattis porta eros, aliquet <br /> finibus risus interdum
                  at. Nulla <br /> vivethe as it was
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:flex lg:pl-[200px] lg:-mt-[30px] xs:hidden ">
            <img src={dot} alt="" className="h-[150px] -mr-[200px]" />
            <img src={Mask} alt="absolute" className="aboslute" />
          </div>
        </div>
      </div>
    </div>
  );
}
