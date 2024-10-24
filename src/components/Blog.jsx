import blog from "../assets/Blog.png";
import blog1 from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";

export default function Blog() {
  return (
    <div className="lg:px-20 lg:py-20 xs:px-5 xs:pt-10 font-poppins bg-gray-100">
      <div>
        <h1 className="text-2xl font-semibold">Recently Blog</h1>
      </div>
      <div className="flex justify-end ">
        <p className="font-semibold hover:underline decoration-amber-400 hover:decoration-4 cursor-pointer">
          View all post
        </p>
      </div>
      <div className="lg:flex lg:justify-evenly xs:grid xs:grid-cols-1 pt-4">
        <div>
          <img src={blog} alt="" />
          <h1 className="px-4 mt-4 font-semibold">
            First Time Home Owner Ideas
          </h1>
          <h1 className="px-4 mt-2 xs:pb-5">by Nana Ama on Nov 18th, 2022</h1>
        </div>
        <div>
          <img src={blog1} alt="" />
          <h1 className="px-4 mt-4 font-semibold">
            First Time Home Owner Ideas
          </h1>
          <h1 className="px-4 mt-2 xs:pb-5">by Nana Ama on Nov 18th, 2022</h1>
        </div>
        <div>
          <img src={blog2} alt="" />
          <h1 className="px-4 mt-4 font-semibold">
            First Time Home Owner Ideas
          </h1>
          <h1 className="px-4 mt-2 xs:pb-5">by Nana Ama on Nov 18th, 2022</h1>
        </div>
      </div>
    </div>
  );
}
