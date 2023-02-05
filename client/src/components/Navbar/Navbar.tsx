export default function Navbar() {
  return (
    <div>
      <div className="flex items-center bg-[#494949] h-[130px] fixed w-[100%] top-0 z-[999]">
        <form className="flex flex-col">
          <input
            type="text"
            className="w-[421px] min-[280px]:w-[103px] h-[40px] text-[10px] text-[#8B96A5] border-solid border border-[#FA3434]"
            placeholder="Search"
          ></input>
          <select className="h-[40px] w-[145px] min-[280px]:w-[103px] border-solid border border-[#FA3434] text-[10px]">
            <option>All category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button
            type="submit"
            className="bg-[#FA3434] h-[40px] w-[100px] min-[280px]:w-[103px] text-white text-[9px]"
          >
            Search
          </button>
        </form>
        <div className="">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/profile_z5vu2g.png"
            className="h-[10px] w-[10px] m-auto"
          ></img>
          <p className="text-[12px]">Profile</p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/message_cfawgt.png"
            className="h-[10px] w-[10px] m-auto"
          ></img>
          <p className="text-[12px]">Message</p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/orders_nz73e1.png"
            className="h-[10px] w-[10px] m-auto"
          ></img>
          <p className="text-[12px]">Orders</p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/mycart_tkced3.png"
            className="h-[10px] w-[10px] m-auto"
          ></img>
          <p className="text-[12px]">My cart</p>
        </div>
      </div>
    </div>
  );
}
