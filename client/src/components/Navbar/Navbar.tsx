export default function Navbar() {
  return (
    <div className="bg-[#494949] flex h-[86px] w-full fixed top-0 z-[999] items-center justify-center">
      <form className="mr-[20px]">
        <input
          type="text"
          className="rounded-l-[6px] w-[421px] text-[#8B96A5] border-solid border border-[#FA3434] h-[40px] "
          placeholder="Search"
        ></input>
        <select className="border-solid border border-[#FA3434] w-[145px] h-[40px]">
          <option>All category</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button
          type="submit"
          className="bg-[#FA3434] text-white rounded-r-[6px] w-[100px] h-[40px]"
        >
          Search
        </button>
      </form>

      <div className="flex ">
        <div className="mr-[20px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/profile_z5vu2g.png"
            className="m-auto w-[20px] h-[20px]"
          ></img>
          <p className="">Profile</p>
        </div>
        <div className="mr-[20px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/message_cfawgt.png"
            className="m-auto w-[20px] h-[20px]"
          ></img>
          <p className="">Message</p>
        </div>

        <div className="mr-[20px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/orders_nz73e1.png"
            className="m-auto w-[20px] h-[20px]"
          ></img>
          <p className="">Orders</p>
        </div>

        <div className="mr-[20px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/mycart_tkced3.png"
            className="m-auto w-[20px] h-[20px]"
          ></img>
          <p className="">My cart</p>
        </div>
      </div>
    </div>
  );
}
