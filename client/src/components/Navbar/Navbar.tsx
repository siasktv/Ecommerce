export default function Navbar() {
  return (
    <div>
      <div className="bg-[#494949] fixed w-[100%] top-0 z-[999] h-[86px] flex items-center justify-center">
        <form className="flex max-[485px]:flex-col min-[486px]:flex-row">
          <input
            type="text"
            className="text-[#8B96A5] border-solid border border-[#FA3434] max-[599px]:w-[103px] max-[599px]:h-[25px] max-[599px]:text-[10px] min-[600px]:w-[29vw] min-[600px]:h-[40px] min-[600px]:text-[16px]"
            placeholder="Search"
          ></input>
          <select className="border-solid border border-[#FA3434] max-[599px]:w-[103px] max-[599px]:h-[25px] max-[599px]:text-[10px] min-[600px]:w-[10vw] min-[600px]:h-[40px] min-[600px]:text-[16px]">
            <option>All category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button
            type="submit"
            className="bg-[#FA3434] text-white rounded-md max-[599px]:w-[103px] max-[599px]:h-[25px] max-[699px]:text-[9px] min-[600px]:w-[9vw] min-[700px]:h-[40px] min-[600px]:text-[16px]"
          >
            Search
          </button>
        </form>

        <div className="flex min-[280px]:ml-[20px]">
          <div className="flex max-[541px]:flex-col max-[541px]:mr-[20px] min-[542px]:flex-row min-[542px]:mr-[5px]">
            <div className="max-[541px]:mb-[10px]">
              <img
                src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/profile_z5vu2g.png"
                className="max-[599px]:h-[10px] max-[599px]:w-[10px] min-[600px]:h-[20px] min-[600px]:w-[20px] m-auto"
              ></img>
              <p className="text-[12px] text-center min-[542px]:mr-[5px]">
                Profile
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/message_cfawgt.png"
                className="max-[599px]:h-[10px] max-[599px]:w-[10px] min-[600px]:h-[20px] min-[600px]:w-[20px] m-auto"
              ></img>
              <p className="text-[12px] text-center">Message</p>
            </div>
          </div>

          <div className="flex max-[541px]:flex-col min-[542px]:flex-row">
            <div className="max-[541px]:mb-[10px]">
              <img
                src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294281/DualTech/orders_nz73e1.png"
                className="max-[599px]:h-[10px] max-[599px]:w-[10px] min-[600px]:h-[20px] min-[600px]:w-[20px] m-auto"
              ></img>
              <p className="text-[12px] text-center min-[542px]:mr-[5px]">
                Orders
              </p>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675294280/DualTech/mycart_tkced3.png"
                className="max-[599px]:h-[10px] max-[599px]:w-[10px] min-[600px]:h-[20px] min-[600px]:w-[20px] m-auto"
              ></img>
              <p className="text-[12px]">My cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
