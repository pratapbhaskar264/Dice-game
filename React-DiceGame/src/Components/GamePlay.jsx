import React, { useState } from "react";
import Rules from "./Rules";

const GamePlay = ({ toggle }) => {
  const [selectednumber, setselectednumber] = useState();
  const [randomselected, setrandomselected] = useState();

  const [showrules, setshowrules] = useState(false);
  const [score, setscore] = useState(0);

  const togglerules = () => {
    setshowrules((prev) => !prev);
  };

  const [error, seterror] = useState("");

  const random = () => {
    if (!selectednumber) {
      seterror("SELECT NUMBER FIRST");
      return;
    } else {
      seterror("");

      let random1 = Math.ceil(0 + Math.random() * 6);

      setrandomselected(random1);
      return randomselected;
    }
  };

  const randomimage = (randomselected) => {
    return randomselected;
  };

  const finalscore = (randomselected) => {
    if (!selectednumber) {
      seterror("SELECT NUMBER FIRST");
    } else {
      seterror("");
      let selected = selectednumber;
      console.log(selected);
      console.log(randomselected);
      if (randomselected === selectednumber) setscore(score + 4);
      else setscore(score - 2);
    }
  };
  const arr = [1, 2, 3, 4, 5, 6];

  const image = (randomselected) => {
    switch (randomselected) {
      case 1:
        return "https://th.bing.com/th/id/R.6a41156b70938bfd49ff93cd6fd1b7cd?rik=5Ej6L307Iv9Fuw&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fkTK%2foqX%2fkTKoqXpzc.png&ehk=V%2bOQMLM%2f3U3jw00QX5OUnjEdexSheJs9AU%2br5231uWQ%3d&risl=&pid=ImgRaw&r=0";
      case 2:
        return "https://th.bing.com/th/id/OIP.SpqTlbIhKhbgvU-sN3boQwHaHU?pid=ImgDet&w=184&h=182&c=7&dpr=1.3";
      case 3:
        return "https://th.bing.com/th/id/OIP.pDq56Xm2unc-1A3RFnG7xgAAAA?w=319&h=313&rs=1&pid=ImgDetMain";
      case 4:
        return "https://w7.pngwing.com/pngs/561/1017/png-transparent-dice-four-sided-die-game-dice-faces-angle-rectangle-wikimedia-commons-thumbnail.png";
      case 5:
        return "https://th.bing.com/th/id/OIP.VGjhsHnCNHMn_icUH17pagAAAA?w=300&h=296&rs=1&pid=ImgDetMain";
      case 6:
        return "https://clipartix.com/wp-content/uploads/2016/09/6-dice-clipart.jpg";

      default:
        return "https://th.bing.com/th/id/R.6a41156b70938bfd49ff93cd6fd1b7cd?rik=5Ej6L307Iv9Fuw&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fkTK%2foqX%2fkTKoqXpzc.png&ehk=V%2bOQMLM%2f3U3jw00QX5OUnjEdexSheJs9AU%2br5231uWQ%3d&risl=&pid=ImgRaw&r=0";
    }
  };

  return (
    <div >
      <div className="flex">
        <button
          onClick={toggle}
          className=" border px-1 py-1 rounded-xl border-gray-400 flex font-bold mt-2 ml-2 hover:bg-gray-800 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>{" "}
          <p>Home</p>
        </button>
      </div>

      <div className="header w-[85vw] m-auto  mt-10 flex justify-between h-[20vh]  ">
        <div className="score flex flex-col w-[10vw] justify-center items-center ">
          <h1 className="text-6xl font-bold">{score}</h1>

          <p className="text-xl font-semibold">Your Score</p>
        </div>

        <div className=" w-[60vw] py-3  flex flex-col items-end ">
          <p
            className="text-red-500 text-2xl font-bold 
         
         "
          >
            {error}
          </p>

          <div className=" h-11  w-full  flex justify-end items-center mt-2 width-[60vw]   gap-2 ">
            {arr.map((value, i) => (
              <div
                key={i}
                onClick={() => setselectednumber(value)}
                className="  w-10 bg-gray-100 rounded-md h-10 font-bold flex justify-center items-center dark:hover:bg-black hover:border dark:hover:text-white hover:h-12 hover:w-12 transition-all duration-300 "
              >
                {value}
              </div>
            ))}
          </div>

          <h1 className="  flex justify-end mr-[3vw] font-bold text-center mt-4 text-xl">
            SELECT YOUR NUMBER
          </h1>
        </div>
      </div>

      <div className="w-[60vw] md:w-[20vw] mt-[10vh] h-[40vh] m-auto rounded-lg flex flex-col items-center">
        <img
          onClick={random}
          src={image(randomimage(randomselected))}
          alt=""
          height="150"
          width="150"
        />

        <p className="text-xl font-bold">Click On Dice To Roll</p>

        <br />
        <br />
        <button
          onClick={() => {
            finalscore(randomselected);
          }}
          className="bg-gray-200 px-3 py-1 rounded-lg font-bold  hover:bg-black hover:text-white transition-all duration-300"
        >
          SHOW SCORE
        </button>

        <button
          className="px-2 py-1 bg-gray-200 font-bold mt-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => {
            setscore(0);
          }}
        >
          {" "}
          RESET SCORE{" "}
        </button>
        <button
          className="mt-5 border px-1 py-1 rounded-xl
        
        bg-gray-200"
          onClick={togglerules}
        >
          Show Rules
        </button>

        {showrules ? <Rules /> : ""}
      </div>
    </div>
  );
};

export default GamePlay;

