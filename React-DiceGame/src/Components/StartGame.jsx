import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <div className="w-[80vw] flex h-[80vh] m-auto mt-[10vh] ">
      <div className="image w-[50%] h-[100%] flex justify-center items-center">
        <img
          src="https://th.bing.com/th/id/OIP.vPE5EosZwKyUkwLnzPVuVAHaFS?rs=1&pid=ImgDetMain"
          alt="dice"
          height={500}
          width={500}
        />
      </div>
      <div className="content flex flex-col justify-center items-center gap-4 w-[50%] h-[100%]  ">
        <h1 className="text-6xl  font-extrabold">DICE GAME</h1>

        <button
          className=" bg-gray-400 hover:bg-gray-500 shadow-2xl py-2 rounded-full font-bold px-3 transition-all cursor-pointer"
          onClick={toggle}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default StartGame;
