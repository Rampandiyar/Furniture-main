import pro1 from "../assets/product-1.png";
import pro2 from "../assets/product-2.png";
import pro3 from "../assets/product-3.png";

export default function Cards() {
  return (
    <div className="max-w-full mx-auto grid lg:grid-cols-2 grid-cols-1 bg-gray-100">
      {/* Left Section */}
      <div className="lg:pt-20 lg:pl-20 xs:pl-5 xs:pt-10 flex flex-col justify-center font-poppins">
        <div>
          <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl mb-4">
            Crafted with <br /> excellent <br />
            material.
          </h1>
          <p className="lg:pb-6 lg:text-lg md:text-base sm:text-sm text-gray-600 mb-4">
            Donec mattis porta eros, aliquet <br /> finibus risus interdum at.
            Nulla <br /> vivethe as it was for us to know <br /> what was to be
            done.
          </p>
          <button className="bg-my-green hover:opacity-70 text-white rounded-full px-6 py-2 lg:text-lg md:text-base text-sm transition-all duration-300">
            Explore
          </button>
        </div>
      </div>

      {/* Right Section - Product Cards */}
      <div className="flex flex-wrap justify-center lg:gap-10 gap-6 lg:pt-20 xs:pt-14 items-center font-poppins font-semibold">
        {/* Card 1 */}
        <div className="w-[90%] lg:w-[250px] bg-my-grays rounded-xl flex flex-col items-center justify-between p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src={pro1}
            alt="Modern Chair"
            className="-mt-[50px] lg:h-[200px] md:h-[150px] h-[120px] object-contain"
          />
          <div className="text-center mt-2">
            <p className="lg:text-lg md:text-base text-sm">Modern Chair</p>
            <p className="lg:text-md md:text-sm text-xs">$60.00</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[90%] lg:w-[250px] bg-my-grays rounded-xl flex flex-col items-center justify-between p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src={pro2}
            alt="Kruzo Aero Chair"
            className="-mt-[50px] lg:h-[200px] md:h-[150px] h-[120px] object-contain"
          />
          <div className="text-center mt-2">
            <p className="lg:text-lg md:text-base text-sm">Kruzo Aero Chair</p>
            <p className="lg:text-md md:text-sm text-xs">$78.00</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[90%] lg:w-[250px] bg-my-grays rounded-xl flex flex-col items-center justify-between p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            src={pro3}
            alt="Ergonomic Chair"
            className="-mt-[50px] lg:h-[200px] md:h-[150px] h-[120px] object-contain"
          />
          <div className="text-center mt-2">
            <p className="lg:text-lg md:text-base text-sm">Ergonomic Chair</p>
            <p className="lg:text-md md:text-sm text-xs">$88.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
