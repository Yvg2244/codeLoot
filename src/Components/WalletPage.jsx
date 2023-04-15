import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/stateProvider";
import axios from "axios";
const WalletPage = () => {
  const [{ user }, dispatch] = useStateValue();
  const [money, setMoney] = useState(0);
  useEffect(()=>{axios
    .post("https://devs-clash.onrender.com/getuser", {
      user_name: user.user_name,
    })
    .then((r) => {
      console.log(r);
      setMoney(r.data.wallet);
      console.log(money);
    })
    .catch((err) => {
      console.log(err);
    });},[])
  return (
    <main className="w-[100vw] h-[100vh] pt-[5.25rem] gap-5 px-[2rem] bg-primary_gray flex flex-col items-center text-white">
      <div className="bg-primary_gray_light flex flex-col items-center justify-center gap-5 p-5 rounded-md">
        <div className="text-xl text-primary_green">Name</div>
        <div className="text-3xl font-bold">{user.name}</div>
        <div className="text-xl text-primary_green">Balance</div>
        <div className="text-3xl font-bold">{money}</div>
        <label htmlFor="addMoney" className="text-primary_green">
          Enter Amount
        </label>
        {/* <input
          type="number"
          onChange={(e) => {
           
          }}
          id="addMoney"
        />
        <button
          className="py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md bg-primary_green text-black  border-black"
          onClick={() => {
            axios
              .patch("https://devs-clash.onrender.com/addmoney", {
                user_name: user.user_name,
                addedMoney: money,
              })
              .then((res) => {
                axios
                  .post("https://devs-clash.onrender.com/getuser", {
                    user_name: user.user_name,
                  })
                  .then((response) => {
                    console.log(response);
                    setMoney(response.data.wallet);
                    console.log(money);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(money);
          }}
        >
          Add Money
        </button> */}
      </div>
    </main>
  );
};

export default WalletPage;
