type ProductcardProps = {
  img: string;
  price: number;
  name: string;
};
export default function Productcard({ img, price, name }: ProductcardProps) {
  return (
    <div className="bg-[#FFFFFFA6] mr-[20px] mb-[20px] w-[220px] h-[310px] rounded-md">
      <img
        src={img}
        className="w-[200px] h-[200px] mt-[10px] mb-[10px] ml-[10px]"
      ></img>
      <div className="ml-[16px]">${price}</div>
      <div className="text-white ml-[16px]">{name}</div>
    </div>
  );
}
