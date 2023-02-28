// import Productcard from "../../components/Productcard/Productcard";
// import Productcardreviewed from "../../components/Productcardreviewed/Productcardreviewed";

// export default function Home() {
//   return (
//     <div className="bg-[#1C1C1C] flex flex-col items-center">
//       {}
//       {}
//       {}
//       <div className="bg-[#FFFFFF59] mt-[160px] rounded-md flex w-[80vw] h-[56vh] items-center max-[800px]:flex-col max-[800px]:h-[124vh] max-[800px]:items-center">
//         <ul className="mr-[1vw] mt-[2vh] text-white">
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
//             All categories
//           </li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">Mouses</li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">Computers</li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">CPU</li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
//             Cellphones
//           </li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">Watches</li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">
//             Headphones
//           </li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">Camaras</li>
//           <li className="hover:bg-[#FFF4F466] rounded-md p-[3px]">Keyboards</li>
//         </ul>
//         <div className="mt-[2vh] bg-[url('https://res.cloudinary.com/dok0di4qp/image/upload/v1675444677/DualTech/Mask_group_qn6ydv.png')] bg-no-repeat bg-cover w-[46vw] h-[41vh] mr-[1vw] rounded-md max-[800px]:w-[75vw]">
//           <p className="text-white mt-[2vh] ml-[1vw]">Latest trending</p>
//           <p className="text-white font-bold ml-[1vw] mb-[2vh]">
//             Electronic items
//           </p>
//           <button className="bg-white rounded-md w-[100px] h-[40px] ml-[1vw]">
//             Shop now
//           </button>
//         </div>
//         <div className="rounded-md bg-[#FFF4F466] w-[16vw] h-[25vh] flex flex-col items-center max-[800px]:h-[27vh] max-[800px]:w-[50vw] max-[800px]:mt-[5px]">
//           <div className="flex">
//             <img
//               src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675445208/DualTech/Avatar_k5qmsn.png"
//               className="w-[40px] h-[40px] mr-[1vw]"
//             ></img>
//             <p className="text-white">Hi, user let’s get started</p>
//           </div>
//           <button className="bg-[#FA3434] rounded-md w-[100px] h-[40px] mb-[1vh] text-white">
//             Join now
//           </button>
//           <button className="bg-white rounded-md w-[100px] h-[40px]">
//             Log in
//           </button>
//         </div>
//       </div>
//       {}
//       {}
//       {}
//       <p className="mt-[172px] font-semibold text-white">All categories</p>
//       {}
//       {}
//       {}
//       <div className="flex flex-wrap justify-center">
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//         <Productcard
//           img={
//             "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//           }
//           price={10.3}
//           name={"Smartwatch silver color modern"}
//         />
//       </div>
//       {}
//       {}
//       {}
//       <div className="flex bg-[#FFFFFF] w-[217px] justify-center h-[40px] items-center rounded-md mb-[140px]">
//         <div className="w-[43px] h-[40px] flex items-center justify-center border-solid border-r border-[#DEE2E7]">
//           <img src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675435040/DualTech/chevron-left_fultoa.png"></img>
//         </div>
//         <p className="border-solid border-x border-[#DEE2E7] w-[43px] h-[40px] flex items-center justify-center">
//           1
//         </p>
//         <p className="border-solid border-x border-[#DEE2E7] w-[43px] h-[40px] flex items-center justify-center">
//           2
//         </p>
//         <p className="border-solid border-x border-[#DEE2E7] w-[43px] h-[40px] flex items-center justify-center">
//           3
//         </p>
//         <div className="w-[43px] h-[40px] flex items-center justify-center border-solid border-l border-[#DEE2E7]">
//           <img src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675435040/DualTech/chevron-right_e3pyop.png"></img>
//         </div>
//       </div>
//       {}
//       {}
//       {}
//       <div className="bg-[url('https://res.cloudinary.com/dok0di4qp/image/upload/v1675447779/DualTech/Group_982_ir9lq6.png')] w-[81vw] h-[510px] flex justify-between rounded-md bg-no-repeat bg-cover">
//         <p className="font-semibold text-white">
//           An easy way to send requests to all suppliers
//         </p>
//         <form className="h-[330px] bg-[#FFFFFF] rounded-md  max-[700px]:h-[410px] mt-[20px] mr-[10px] flex flex-col flex-wrap w-[40%]">
//           <p className="font-semibold text-gray-600 w-[90%] ml-[5px] mt-[5px] mb-[10px]">
//             Send quote to suppliers
//           </p>
//           <input
//             type="text"
//             className="rounded-md border ml-[5px] mr-[5px] mb-[20px] placeholder:text-black w-[90%]"
//             placeholder="What item you need?"
//           ></input>
//           <textarea className="rounded-md border ml-[5px] mr-[5px] h-[73px] mb-[20px] text-gray-600 w-[90%]">
//             Type for more details
//           </textarea>
//           <div className="">
//             <input
//               type="text"
//               className="ml-[5px] mr-[5px] rounded-md border h-[40px] placeholder:text-black w-[206px] max-[700px]:w-[83%]"
//               placeholder="Quantity"
//             ></input>
//             <select className="ml-[5px] mr-[5px] h-[40px] rounded-md border">
//               <option>Pcs</option>
//             </select>
//           </div>
//           <button className="h-[40px] bg-[#FA3434] rounded-md w-[128px] text-white mt-[20px] ml-[5px] max-[476px]:w-[83%] max-[476px]:h-[50px]">
//             Send inquiry
//           </button>
//         </form>
//       </div>
//       {}
//       {}
//       {}
//       <div className="bg-[#FFFFFF59] mt-[180px] w-full mb-[140px] flex justify-center">
//         <div className="bg-white rounded-md flex flex-col mt-[32px] mb-[96px] w-[82vw]">
//           <p className="font-semibold ml-[10px]">Most popular products</p>
//           <div className="flex  flex-wrap ml-[10px]">
//             <Productcardreviewed
//               img={
//                 "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//               }
//               review={5}
//               name={"Smartwatch silver color modern"}
//             />
//             <Productcardreviewed
//               img={
//                 "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//               }
//               review={5}
//               name={"Smartwatch silver color modern"}
//             />
//             <Productcardreviewed
//               img={
//                 "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//               }
//               review={5}
//               name={"Smartwatch silver color modern"}
//             />
//             <Productcardreviewed
//               img={
//                 "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//               }
//               review={5}
//               name={"Smartwatch silver color modern"}
//             />
//             <Productcardreviewed
//               img={
//                 "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//               }
//               review={5}
//               name={"Smartwatch silver color modern"}
//             />
//             <Productcardreviewed
//               img={
//                 "https://res.cloudinary.com/dok0di4qp/image/upload/v1675369342/DualTech/05_hbc7u0.png"
//               }
//               review={5}
//               name={"Smartwatch silver color modern"}
//             />
//           </div>
//         </div>
//       </div>
//       {}
//       {}
//       {}
//     </div>
//   );
// }
