import sofa1 from "../assets/sofa1.png";
import email from "../assets/email.png";
import rect from "../assets/Rect.png";
import tele from "../assets/tele.png";
import fin from "../assets/FIN2.png";
import smi from "../assets/smi.png";
export default function Footer() {
  return (
    <div className="lg:px-20 xs:px-5 xs:pt-10 font-poppins bg-white">
      <div>
        <div>
          <div className="flex justify-end ">
            <img
              src={sofa1}
              alt=""
              className="lg:-mt-[120px] xs:-mt-[70px] xs:h-[200px] lg:h-[350px]"
            />
          </div>
          <div className="flex  lg:-mt-32">
            <img src={email} alt="" className="h-5" />
            <h1 className="px-2 font-semibold">Subscribe to Newsletter</h1>
          </div>
          <div className="flex lg:flex-row  xs:flex-col mt-3">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 px-4 border-2 w-[300px] rounded-2xl"
            />
            <div className="lg:px-2 lg:py-0 xs:py-2">
              <input
                type="text"
                placeholder="Enter Your e-mail"
                className="p-2 px-4 border-2 w-[300px] rounded-2xl"
              />
            </div>
            <button>
              <img
                src={tele}
                alt=""
                className="absolute mt-[10px] ml-2 h-5 hover:opacity-60"
              />
              <img src={rect} alt="" className="h-10 hover:opacity-60" />
            </button>
          </div>
        </div>
        <div className="mt-16">
          <img src={fin} alt="" className="h-5" />
          <div className="flex lg:flex-row xs:flex-col">
            <p>
              Donec mattis porta eros, aliquet finibus risus interdum <br /> at.
              Nulla vivethe as it was for us to know what was to <br /> be done.
              the this is a long post for the text.`This small <br /> text has
              to be place here, since this is{" "}
            </p>
            <div className="px-4 xs:py-3">
              <h2>About us</h2>
              <h2>Services</h2>
              <h1>Blog</h1>
              <h1>Contact us</h1>
            </div>
            <div className="px-4 xs:py-3">
              <h1>support</h1>
              <h1>Knowledge</h1>
              <h1>Live Chat</h1>
            </div>
            <div className="px-4 xs:py-3">
              <h1>Jobs</h1>
              <h1>Our team</h1>
              <h1>Leadership</h1>
              <h1>Privacy Policy</h1>
            </div>
            <div className="px-4 xs:py-3">
              <h1>Nordic Chair</h1>
              <h1>Kruzo Aero</h1>
              <h1>Ergonomic</h1>
            </div>
          </div>
          <img src={smi} alt="" className="pt-2 h-10" />
          <span className="underline decoration-gray-300 decoration-4 px-2"></span>
        </div>
        <div className="flex justify-end">
          <h1 className="px-5">Terms & Conditions</h1>
          <h1>Privacy</h1>
        </div>
      </div>
    </div>
  );
}
