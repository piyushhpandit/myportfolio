import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-[90%] m-auto mt-[10px] text-white p-10">
    <h2 className="text-3xl mb-4 font-bold tracking-tight text-[#242424] sm:text-4xl">
Contact Me
  </h2>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-[40%] flex flex-col sm:flex-col">
        <div>
          <h1 className="text-[#bf9467]">Phone:</h1>
          <h4 className="text-[12px] mb-[20px]">+91 6392165764</h4>
          </div>
          <div>
          <h1 className="text-[#bf9467]">Mail:</h1>
          <h4 className="text-[12px] mb-[20px]">mpiyush243@gmail.com</h4>
          </div>
          <div>
          <h1 className="text-[#bf9467]">Address:</h1>
          <h4 className="text-[12px] mb-[20px]">Noida, Uttar Pradesh</h4>
        </div>
        </div>

        {/* Form */}
        <div className="w-full sm:w-[50%]">
          <div className="flex justify-between w-[100%]">
            <div className="flex justify-between w-[48%]">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#181414] w-[100%] mt-[12px] rounded-full text-white placeholder-gray-700 text-sm p-2"
              />
            </div>
            <div className="flex justify-between w-[48%]">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#181414] w-[100%] mt-[12px] rounded-full text-white placeholder-gray-700 text-sm p-2"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
          </div>
          <div>
            <input
              type="tel"
              placeholder="Contact No."
              className="bg-[#181414] w-[100%] mt-[12px] rounded-full text-white placeholder-gray-700 text-sm p-2"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="bg-[#181414] w-[100%] h-[100px] mt-[12px] rounded-xl text-white placeholder-gray-700 text-sm p-2"
            />
          </div>
          <button className="bg-[#181414] p-2 rounded-full px-4 text-sm hover:ring ring-red-500">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
