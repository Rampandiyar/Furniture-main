import dot2 from "../assets/Dot2.png";
import z1 from "../assets/Z1.png";
import z2 from "../assets/Z2.png";
import z3 from "../assets/Z3.png";
import lst from "../assets/lst.png";
import pro1 from "../assets/product-1.png";
import pro2 from "../assets/product-2.png";
import pro3 from "../assets/product-3.png";
export default function Services() {
  return (
    <div className="lg:pt-20 lg:pl-20 xs:pl-5 xs:pt-10 font-poppins bg-gray-100">
      <div>
        <div className="grid lg:grid-cols-2 xs:grid-cols-1">
          <div>
            <div>
              <img
                src={dot2}
                alt=""
                className="xs:h-24 xs:w-32 lg:h-[170px] lg:w-[250px] "
              />
              <div className="flex">
                <img
                  src={z1}
                  alt=""
                  className=" rounded-xl lg:-mt-20 lg:ml-14 xs:h-[260px] lg:h-[450px] xs:-mt-14 xs:ml-6 shadow-xl"
                />
                <img
                  src={z3}
                  alt=""
                  className=" lg:-mt-[80px] xs:ml-2 lg:ml-5 lg:h-[200px] xs:h-[100px] xs:-mt-[54px] rounded-xl shadow-xl"
                />
              </div>
              <img
                src={z2}
                alt=""
                className="lg:-mt-[220px] xs:h-[200px] xs:-mt-[150px] xs:ml-[200px] lg:ml-[410px] lg:h-[290px] lg:w-[300px] rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:ml-20 lg:mt-36">
            <h1 className="lg:text-2xl xs:text-lg font-poppins font-semibold ">
              We help you make <br /> Modern Interior <br /> Design{" "}
            </h1>
            <p className="xs:text-[12px] lg:text-base">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla{" "}
              <br /> vivethe as it was for us to know what was to be done. the
              this is a <br /> long post for the text.This small text has to be
              place here, since <br /> this is a place holder. You can also
              chane it.
            </p>
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex mt-4">
                  <img src={lst} alt="" className="h-2 mt-2 pr-2" />
                  <p className="xs:text-[12px] lg:text-base">
                    Donec mattis porta eros,let <br /> aliquet finibus ri
                  </p>
                </div>
                <div className="flex ml-8 mt-4">
                  <img src={lst} alt="" className="h-2 mt-2 pr-2" />
                  <p className="xs:text-[12px] lg:text-base">
                    Donec mattis porta eros,let <br /> aliquet finibus ri
                  </p>
                </div>
              </div>
              <div className="flex">
                {" "}
                <div className="flex mt-4">
                  <img src={lst} alt="" className="h-2 mt-2 pr-2" />
                  <p className="xs:text-[12px] lg:text-base">
                    Donec mattis porta eros,let <br /> aliquet finibus ri
                  </p>
                </div>
                <div className="flex ml-8 mt-4">
                  <img src={lst} alt="" className="h-2 mt-2 pr-2" />
                  <p className="xs:text-[12px] lg:text-base">
                    Donec mattis porta eros,let <br /> aliquet finibus ri
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center xs:mt-4 lg:mr-[200px]">
              <button className="bg-my-green px-5 lg:py-2 xs:py-1 rounded-full text-white hover:opacity-60">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex xs:hidden xs:mt-20 lg:mt-40 lg:ml-28 ">
        <div className="bg-my-grays rounded-xl">
          <img src={pro1} alt="" className="lg:h-[130px] -mt-10 " />
        </div>
        <div className="lg:pl-7 xs:pl-1">
          <h1 className="lg:text-[13px] font-semibold">Modern Chair</h1>
          <p className="lg:text-[13px] xs:text-[10px]">
            Donec mattis porta eros, <br /> aliquet finibus risus in. Donecd{" "}
          </p>
          <button className="lg:text-[13px] xs:text-[10px]">Read more</button>
        </div>
        <div className="flex lg:pl-16 xs:pl-2">
          {" "}
          <div className="bg-my-grays rounded-xl">
            <img src={pro2} alt="" className="lg:h-[130px] -mt-10 " />
          </div>
          <div className="lg:pl-7 xs:pl-1">
            <h1 className="lg:text-[13px] font-semibold">Modern Chair</h1>
            <p className="lg:text-[13px] xs:text-[10px]">
              Donec mattis porta eros, <br /> aliquet finibus risus in. Donecd{" "}
            </p>
            <button className="lg:text-[13px] xs:text-[10px]">Read more</button>
          </div>
        </div>
        <div className="flex lg:px-14 xs:pl-2">
          {" "}
          <div className="bg-my-grays rounded-xl">
            <img src={pro3} alt="" className="lg:h-[130px] -mt-10 " />
          </div>
          <div className="lg:pl-7 xs:pl-1">
            <h1 className="lg:text-[13px]  font-semibold">Modern Chair</h1>
            <p className="lg:text-[13px] xs:text-[10px]">
              Donec mattis porta eros, <br /> aliquet finibus risus in. Donecd{" "}
            </p>
            <button className="lg:text-[13px] xs:text-[10px]">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
