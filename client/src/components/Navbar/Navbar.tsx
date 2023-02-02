import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#494949] h-[86px] fixed w-full top-0 z-[999]">
        <form>
          <input
            type="text"
            className="h-[40px] w-[421px] text-[16px] text-[#8B96A5] border-solid border border-[#FA3434]"
            placeholder="Search"
          ></input>
          <select className="h-[40px] w-[145px] border-solid border border-[#FA3434]">
            <option>All category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button
            type="submit"
            className="bg-[#FA3434] h-[40px] w-[100px] text-white"
          >
            Search
          </button>
        </form>
        <div className="flex-col ml-[50px] mr-[30px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/profile_z5vu2g.png"
            className="h-[20px] w-[20px] m-auto"
          ></img>
          Profile
        </div>
        <div className="flex-col mr-[30px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/message_cfawgt.png"
            className="h-[20px] w-[20px] m-auto"
          ></img>
          Message
        </div>
        <div className="flex-col mr-[30px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/orders_nz73e1.png"
            className="h-[20px] w-[20px] m-auto"
          ></img>
          Orders
        </div>
        <div className="flex-col mr-[-170px]">
          <img
            src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/mycart_tkced3.png"
            className="h-[20px] w-[20px] m-auto"
          ></img>
          My cart
        </div>
      </div>
      <div className="mt-[86px]">
        <Outlet />
      </div>
    </div>
  );
}
