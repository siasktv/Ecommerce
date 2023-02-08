type ProductcardProps = {
  img: string;
  price: number;
  name: string;
};
export default function Productcard({ img, price, name }: ProductcardProps) {
  return (
    <div className="w-[220px] h-[310px] bg-[#FFFFFFA6] mb-[20px] mr-[20px] flex justify-center flex-col rounded-md">
      <img src={img} className="m-auto"></img>
      <div className="">${price}</div>
      <div className="text-white">{name}</div>
    </div>
  );
}
