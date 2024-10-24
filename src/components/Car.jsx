import { TECarousel, TECarouselItem } from "tw-elements-react";
export default function Car() {
  return (
    <div>
      <div className="lg:px-60 lg:py-20 xs:px-5 xs:pt-10 flex justify-center items-center bg-gray-100">
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
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex flex-col justify-center items-center lg:px-40 xs:px-10 xs:py-10 lg:py-10 font-poppins">
                <h1 className="lg:text-2xl xs:text-lg">Testimonials</h1>
                <p className="xs:text-[10px] lg:text-base">
                  ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                  quam. Mauris accumsan <br /> felis fermentum euismod egestas.
                  Mauris ante augue, cursus sit amet arcu a, maximus <br />{" "}
                  suscipit nibh. Integer vel nibh tellus. Pellentesque in risus
                  non dui venenatis sollicitudin <br /> sed vitae diam. Fusce
                  tincidunt nisl mi, at molestie odio accumsan non. Pellentesque
                  ma’’
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex flex-col justify-center items-center lg:px-40 xs:px-10 xs:py-10 lg:py-10 font-poppins">
                <h1 className="lg:text-2xl xs:text-lg">Testimonials</h1>
                <p className="xs:text-[10px] lg:text-base">
                  ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                  quam. Mauris accumsan <br /> felis fermentum euismod egestas.
                  Mauris ante augue, cursus sit amet arcu a, maximus <br />{" "}
                  suscipit nibh. Integer vel nibh tellus. Pellentesque in risus
                  non dui venenatis sollicitudin <br /> sed vitae diam. Fusce
                  tincidunt nisl mi, at molestie odio accumsan non. Pellentesque
                  ma’’
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex flex-col justify-center items-center lg:px-40 xs:px-10 xs:py-10 lg:py-10 font-poppins">
                <h1 className="lg:text-2xl xs:text-lg">Testimonials</h1>
                <p className="xs:text-[10px] lg:text-base">
                  ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                  quam. Mauris accumsan <br /> felis fermentum euismod egestas.
                  Mauris ante augue, cursus sit amet arcu a, maximus <br />{" "}
                  suscipit nibh. Integer vel nibh tellus. Pellentesque in risus
                  non dui venenatis sollicitudin <br /> sed vitae diam. Fusce
                  tincidunt nisl mi, at molestie odio accumsan non. Pellentesque
                  ma’’
                </p>
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
      <div></div>
    </div>
  );
}
