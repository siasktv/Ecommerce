export default function Footer() {
  return (
    <div>
      <div className="bg-[#494949] h-[190px] flex items-center justify-center flex-col">
        <div className="text-white font-semibold text-xl">
          Subscribe on our newsletter
        </div>
        <div className="text-white mb-[20px] text-base font-normal">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </div>
        <form>
          <input
            type="text"
            placeholder="Email"
            className="bg-[url('https://res.cloudinary.com/dok0di4qp/image/upload/v1675350810/DualTech/VectorEmail_hs4ceq.png')] bg-no-repeat bg-center bg-left pl-[40px] w-[274px] h-[40px] rounded-[6px]"
          ></input>
          <button
            type="submit"
            className="text-white bg-[#FA3434] h-[40px] w-[110px] ml-[16px] rounded-[6px]"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="bg-white h-[324px] flex flex-row">
        <div className="flex-row flex mt-[200px] ml-[130px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675354524/DualTech/Combined_Shape_vjjqzr.png"
            className="h-[30px] w-[30px] mr-[10px]"
          ></img>
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675354525/DualTech/Fill_184_tqstzx.png"
            className="h-[30px] w-[30px] mr-[10px]"
          ></img>
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675354524/DualTech/Combined_Shape-1_ktleef.png"
            className="h-[30px] w-[30px] mr-[10px]"
          ></img>
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675354524/DualTech/linkedin3_mzkmwk.png"
            className="h-[30px] w-[30px] mr-[10px]"
          ></img>
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675354524/DualTech/Fill_183_hmqw6f.png"
            className="h-[30px] w-[30px] mr-[100px]"
          ></img>
        </div>

        <div className="flex items-center justify-center">
          <div className="mr-[60px]">
            <div className="mb-[10px] font-semibold">About</div>
            <ul>
              <li className="text-[#8B96A5]">About Us</li>{" "}
              <li className="text-[#8B96A5]">Find store</li>
              <li className="text-[#8B96A5]">Categories</li>{" "}
            </ul>
          </div>
          <div className="mr-[130px]">
            <div className="mb-[10px] font-semibold">For users</div>
            <ul>
              <li className="text-[#8B96A5]">Login</li>{" "}
              <li className="text-[#8B96A5]">Register</li>{" "}
              <li className="text-[#8B96A5]">My Orders</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1C1C] h-[68px] flex justify-between items-center">
        <div className="text-white ml-[128px]">© 2023 Ecommerce.</div>
        <div className="flex">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675361235/DualTech/US_2x_wh278z.png"
            className="w-[24px] h-[17px] mr-[6px]"
          ></img>
          <div className="text-white mr-[160px]">English</div>
        </div>
      </div>
    </div>
  );
}
