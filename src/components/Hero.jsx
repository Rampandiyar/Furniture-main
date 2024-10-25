// Hero.js
import couch from "../assets/couch 1.png";
import dot from "../assets/Dot.png";

export default function Hero() {
  return (
    <div className="max-w-full mx-auto bg-my-green flex items-center justify-center lg:h-72 h-auto py-8 lg:py-0 relative z-10">
      <div className="relative flex flex-col lg:flex-row px-3 lg:ml-52 gap-6">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start lg:items-center text-center lg:text-left">
          <div className="font-DM-serif text-lg lg:text-4xl text-white drop-shadow-md">
            <h1>"Transform your</h1>
            <h1>space with elegance."</h1>
          </div>
          <div className="flex gap-4 py-4">
            <button className="border-2 rounded-full text-xs lg:text-base px-4 lg:px-7 py-1 hover:border-yellow-500 hover:bg-yellow-500 transition-all duration-300">
              Shop Now
            </button>
            <button className="border-2 rounded-full text-xs lg:text-base px-4 lg:px-7 py-1 hover:border-yellow-500 hover:bg-yellow-500 transition-all duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:max-h-[400px] xs:max-h-[100px]">
          {/* Dot Image - Positioned Behind the Couch */}
          <img
            src={dot}
            alt="dot"
            className="absolute z-[-1] lg:ml-[400px] xs:h-14 lg:h-44 xs:left-36 lg:left-[100px] top-0"
          />
          {/* Couch Image */}
          <img
            src={couch}
            alt="couch"
            className="lg:h-[380px] xs:h-[130px] lg:pl-20 relative xs:mt-[-20px] lg:mt-[-40px]"
          />
        </div>
      </div>
    </div>
  );
}
