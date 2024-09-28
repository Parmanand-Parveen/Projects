import Image from "next/image";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <Header></Header>
      <div className="h-[140vh] w-screen relative  ">
        <div className="absolute h-20 w-40 -bottom-0  right-0 bg-[#121212]"></div>
        <iframe
          className="bg-fixed z-0 bg-slate-800"
          src="https://my.spline.design/particles-9ba6d44c3c1528ad96feea2027809a40/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="h-[120vh]  w-screen relative ">
        <div className="absolute h-20 w-40 -bottom-0  right-0 bg-[#130F0F]"></div>
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-538b2fe9be6e8014dcd9e2d248e3b08f/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="flex bg-[#000000] justify-around items-center h-[50vh] p-52">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">01.</h1>
          <h3 className="text-3xl text-gray-600">
            {" "}
            Can Create end to end Product
          </h3>
          <p className="text-gray-400 text-xl">
            Devin is made of the industries best GPTS and it is the most
            advanced version of all GPTS.
          </p>
          <button className="bg-blue-700 self-start p-3 text-white">
            {" "}
            Try Now
          </button>
        </div>
        <div>
          <video
            loop
            autoPlay
            muted
            src="https://www.shutterstock.com/shutterstock/videos/24896750/preview/stock-footage-programming-code-running-down-a-computer-screen-terminal.webm"
          ></video>
        </div>
      </div>
      <div className="flex bg-[#000000] justify-around items-center h-[50vh] gap-4 p-52">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL8uoOKKjjqJc13rVEGo7jYeu7DgBvaAi7w&s" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">02.</h1>
          <h3 className="text-3xl text-gray-600">
            {" "}
            Can complete the task 60% faster
          </h3>
          <p className="text-gray-400 text-xl">
            As compaired to humans Devin can complete the task 60% faster.
          </p>
          <button className="bg-blue-700 self-start p-3 text-white">
            {" "}
            Try Now
          </button>
        </div>
      </div>
      <div className="flex bg-[#000000] justify-around items-center h-[50vh] gap-4 p-52">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">03.</h1>
          <h3 className="text-3xl text-gray-600"> Upto 80% cost efficient</h3>
          <p className="text-gray-400 text-xl">
            Using Devin uou can save upto 80% of the total cost of the product.
          </p>
          <button className="bg-blue-700 self-start p-3 text-white">
            {" "}
            Try Now
          </button>
        </div>
        <div>
          <img src="https://www.shutterstock.com/image-photo/quality-increase-cost-optimization-products-600nw-2332604711.jpg" />
        </div>
      </div>
      <div className="h-[100vh] w-screen relative flex justify-around p-4 items-center">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="py-2 px-5 bg-transparent border border-white rounded-full"
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="py-2 px-5 bg-transparent border border-white rounded-full"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="py-2 px-5 bg-transparent border border-white rounded-full"
          />
          <textarea
            placeholder="Enter Your Message"
            className="py-2 px-5 bg-transparent border border-white rounded-full resize-none flex itesms-center"
          ></textarea>
          <button className="bg-blue-500 transition hover:bg-blue-700 p-3 text-white">
            Submit
          </button>
        </div>
        <div className="h-full w-1/2 relative">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-6b8203802612839e4440d96444b27223/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
          <div className="absolute h-20 w-40 -bottom-0  right-0 bg-[#0A0A0A]"></div>
        </div>
      </div>
      <Footer>
      </Footer>
      
    </div>
  );
}
