import Productcard from "../../components/Productcard/Productcard";
import Productcardreviewed from "../../components/Productcardreviewed/Productcardreviewed";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="h-[2500px] ">
        <div className="flex flex-col items-center">
          <div className="bg-[#ffffff59] w-[1180px] h-[300px] mt-[120px] mb-[150px] flex rounded-md">
            <ul className="w-[250px] text-white mr-[6px] mt-[10px] ml-[5px]">
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                All categories
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Mouses
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Computers
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">CPU</li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Cellphones
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Watches
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Headphones
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Camaras
              </li>
              <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
                Keyboards
              </li>
            </ul>

            <img
              src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675444677/DualTech/Mask_group_qn6ydv.png"
              className="mt-[10px] mb-[10px] mr-[10px]"
            ></img>

            <div className="bg-[#FFF4F466] h-[150px] w-[200px] mt-[20px] rounded-md">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675445208/DualTech/Avatar_k5qmsn.png"
                  className="m-[10px]"
                ></img>
                <p className="mt-[10px] mr-[20px] text-white">
                  Hi, user let’s get started
                </p>
              </div>
              <div className="flex flex-col mt-[10px] items-center">
                <button className="bg-[#FA3434] h-[30px] w-[180px] mb-[7px] rounded-md">
                  Join now
                </button>
                <button className="bg-white h-[30px] w-[180px] rounded-md">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white ml-[65px]">All categories</div>
        <div className="flex flex-wrap ml-[65px]">
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
          <Productcard
            img={
              "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
            }
            price={10.3}
            name={"Smartwatch silver color modern"}
          />
        </div>
        <div className="flex justify-center">
          <div className="bg-[#FFFFFF] h-[40px] w-[200px] flex items-center mb-[140px] rounded-md">
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <img src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675435040/DualTech/chevron-left_fultoa.png"></img>
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center border-solid border-x border-[#DEE2E7]">
              1
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center border-solid border-x-0 border-[#DEE2E7]">
              2
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center border-solid border-x border-[#DEE2E7]">
              3
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center border-solid border-[#DEE2E7]">
              <img src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675435040/DualTech/chevron-right_e3pyop.png"></img>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675447779/DualTech/Group_982_ir9lq6.png"
              className="h-[400px] mb-[100px]"
            ></img>
            <div className="absolute top-10 left-12 font-semibold text-3xl text-white">
              An easy way to send requests to all suppliers
            </div>
            <div className="bg-white rounded-md absolute top-10 left-[700px] h-[300px] w-[400px]">
              <form className="flex flex-col">
                <p className="mt-[22px] font-semibold text-xl ml-[20px]">
                  Send quote to suppliers
                </p>
                <input
                  type="text"
                  className="mt-[20px] ml-[20px] mr-[20px] h-[40px] border mb-[10px] border-[#DEE2E7] rounded-md placeholder:text-black"
                  placeholder="What item you need?"
                ></input>
                <input
                  type="text"
                  className="mb-[5px] ml-[20px] border border-[#DEE2E7] rounded-md mr-[20px] h-[73px]"
                  placeholder="Type more details"
                ></input>
                <div className="flex">
                  <input
                    type="text"
                    className="mb-[5px] ml-[20px] mt-[10px] h-[40px] border border-[#DEE2E7] rounded-md mr-[5px] placeholder:text-black"
                    placeholder="Quantity"
                  ></input>
                  <select className="h-[40px] mt-[10px] border border-[#DEE2E7] rounded-md w-[100px]">
                    <option>Pcs</option>
                  </select>
                </div>
                <button className="mt-[7px] bg-[#FA3434] w-[128px] ml-[20px] text-white rounded-md p-[5px]">
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF59]">
          <div className="h-[350px] mb-[100px] flex justify-center">
            <div className="bg-white h-[350px] w-[1200px] mt-[25px] rounded-md">
              <p className="font-semibold text-xl ml-[20px] mt-[20px]">
                Most popular products
              </p>
              <div className="flex">
                <Productcardreviewed
                  img={
                    "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
                  }
                  review={5}
                  name={"Smartwatch silver color modern"}
                />
                <Productcardreviewed
                  img={
                    "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
                  }
                  review={5}
                  name={"Smartwatch silver color modern"}
                />
                <Productcardreviewed
                  img={
                    "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
                  }
                  review={5}
                  name={"Smartwatch silver color modern"}
                />
                <Productcardreviewed
                  img={
                    "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
                  }
                  review={5}
                  name={"Smartwatch silver color modern"}
                />
                <Productcardreviewed
                  img={
                    "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
                  }
                  review={5}
                  name={"Smartwatch silver color modern"}
                />
                <Productcardreviewed
                  img={
                    "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
                  }
                  review={5}
                  name={"Smartwatch silver color modern"}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1C1C1C] h-[180px]"></div>
        </div>
      </div>
    </div>
  );
}
