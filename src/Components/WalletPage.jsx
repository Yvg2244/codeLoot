import React from "react";
import { useStateValue } from "../context/stateProvider";

const WalletPage = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user)
  return (
    <main className="w-[100vw] h-[100vh] pt-[5.25rem] gap-5 px-[2rem] bg-primary_gray flex flex-col items-center text-white">
      <div className="bg-primary_gray_light flex flex-col items-center justify-center gap-5 p-5 rounded-md">
        <div className="text-xl text-primary_green">Name</div>
        <div className="text-3xl font-bold">{user.name}</div>
        <div className="text-xl text-primary_green">Amount</div>
        <div className="text-3xl font-bold">{user.wallet}</div>
        <label htmlFor="addMoney">Add Amount</label>
        <input type="number" id="addMoney" />
      </div>
    </main>
  );
};

export default WalletPage;
