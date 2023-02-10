import { useState } from "react";
import { crearUsuario } from "../../components/Firebase/Firebase";
export default function Register() {
  interface ObjUserType {
    email: string;
    password: string;
  }
  const [user, setUser] = useState<ObjUserType>({
    email: "",
    password: "",
  });

  return (
    <div>
      <form
        onSubmit={async (e) => {
          //crearUsuario(user)
          e.preventDefault();
          await crearUsuario(user);
          //console.log(x);
        }}
      >
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <input
          type="password "
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button className="bg-[#FA3434] text-white rounded-md w-[100px] h-[40px]">
          Enviar
        </button>
      </form>
    </div>
  );
}
