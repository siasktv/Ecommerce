type ProductcardreviewedProps = {
  img: string;
  name: string;
  review: number;
};
export default function Productcardreviewed({
  img,
  review,
  name,
}: ProductcardreviewedProps) {
  return (
    <div className="bg-[#EEEEEE] ml-[10px] mr-[10px] w-[220px] h-[230px] rounded-md mt-[10px] flex flex-col justify-start items-center">
      <img
        src={img}
        className="w-[100px] h-[100px] mt-[20px] flex items-center"
      ></img>
      <div className="text-black ml-[30px]">{name}</div>
      <div className="flex ml-[30px]">
        <img src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className="mr-[4px]"
        ></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className="mr-[4px]"
        ></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className="mr-[4px]"
        ></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className="mr-[4px]"
        ></img>
        <p className="text-[#414141] text-sm">(15)</p>
      </div>
    </div>
  );
}
