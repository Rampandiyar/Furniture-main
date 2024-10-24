import { TECarousel, TECarouselItem } from "tw-elements-react";
import img1 from "../assets/person1.png";
import img2 from "../assets/person2.png";
import img3 from "../assets/person3.png";

const carouselItems = [
  { id: 1, name: "Sophia Johnson", title: "Chief Marketing Officer, ABC Corp.", image: img1 },
  { id: 2, name: "Liam Smith", title: "Head of Development, DEF Tech.", image: img2 },
  { id: 3, name: "Emma Williams", title: "Lead Designer, GHI Studio.", image: img3 },
];

export default function Car2() {
  return (
    <div className="lg:px-20 xs:px-5">
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative py-20 w-full overflow-hidden after:clear-both after:block after:content-['']">
          {carouselItems.map((item) => (
            <TECarouselItem
              key={item.id}
              itemID={item.id}
              className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex flex-col items-center">
                <img src={item.image} alt={`${item.name} profile`} className="mb-4 w-24 h-24 rounded-full" />
                <h1 className="font-semibold text-center">{item.name}</h1>
                <p className="text-center">{item.title}</p>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </div>
  );
}
