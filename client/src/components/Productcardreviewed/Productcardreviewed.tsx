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
    <div className="w-[220px] h-[310px] bg-gray-600 mb-[20px] mr-[20px] flex justify-center flex-col rounded-md">
      <img src={img} className="m-auto"></img>
      <div className="">{name}</div>
      <div className="flex">
        <img src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className=""
        ></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className=""
        ></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className=""
        ></img>
        <img
          src="https://res.cloudinary.com/dok0di4qp/image/upload/v1675456452/DualTech/Star_1_rjadvp.png"
          className=""
        ></img>
        <p className="">(15)</p>
      </div>
    </div>
  );
}
