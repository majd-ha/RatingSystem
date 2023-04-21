import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsStar, BsStarFill } from "react-icons/bs";
import { CgSmileNeutral } from "react-icons/cg";
import { FaRegSmileBeam } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TfiFaceSad } from "react-icons/tfi";
export default function RatingForm({
  title,
  starsnum,
  fgroup,
  setRate,
  ready,
}) {
  const [ratePoints, setratePoints] = useState(null);

  const [currentState, setCurrentState] = useState(null);
  const emptystars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  emptystars.length = starsnum;

  const rateStatus2 = {
    bad: {
      color: "text-red-700",
      message: "we are sad to hear that",
      icon: <TfiFaceSad />,
      state: fgroup[0],
      feel: "angry",
    },
    acceptable: {
      color: "text-yellow-500",
      message: "it is awkward..lol",
      icon: <CgSmileNeutral />,
      state: fgroup[3] ? "acceptable" : "",
      feel: "not upset",
    },
    good: {
      color: "text-lime-400",
      message: "hope you have a better experince in the next visit",
      icon: <HiOutlineEmojiHappy />,
      state: fgroup[3] ? "good" : fgroup[1],
      feel: "satisfied",
    },
    perfect: {
      color: "text-green-600",
      message: "we are happy to hear that , thank you",
      icon: <FaRegSmileBeam />,
      state: fgroup[fgroup.length - 1],
      feel: "thankfull",
    },
  };

  useEffect(() => {
    if (ratePoints != null) {
      if (fgroup.length === 3) {
        if (ratePoints <= 4) {
          setCurrentState(rateStatus2.bad);
        } else if (ratePoints > 4 && ratePoints <= 7) {
          setCurrentState(rateStatus2.good);
        } else if (ratePoints > 7 && ratePoints <= 10) {
          setCurrentState(rateStatus2.perfect);
        }
      } else {
        if (ratePoints <= 4) {
          setCurrentState(rateStatus2.bad);
        } else if (ratePoints > 4 && ratePoints <= 6) {
          setCurrentState(rateStatus2.acceptable);
        } else if (ratePoints > 6 && ratePoints <= 8) {
          setCurrentState(rateStatus2.good);
        } else {
          setCurrentState(rateStatus2.perfect);
        }
      }
    }
  }, [ratePoints]);

  useEffect(() => {
    if (ready && ratePoints != null) {
      setRate({ rate: ratePoints, currentState: currentState, title });
    }
  }, [ready, ratePoints]);

  return (
    <div className="w-[60%] max-sm:w-[90%] my-5 mx-auto border rounded-lg p-5 shadow-inner">
      <h1 className="text-center capitalize text-3xl mb-5 italic">{title}</h1>

      <IconContext.Provider
        value={{
          size: "3rem",
        }}
      >
        <div className="flex justify-between text-[#756300]">
          {emptystars.map((el) => {
            return el <= ratePoints ? (
              <BsStarFill
                key={el}
                onClick={() => {
                  setratePoints(el);
                }}
                className={`${currentState?.color} transition-colors duration-200 `}
              />
            ) : (
              <BsStar
                key={el}
                onClick={() => {
                  setratePoints(el);
                }}
                className={`${currentState?.color}`}
              />
            );
          })}
        </div>
      </IconContext.Provider>

      <p className={`${currentState?.color} text-3xl text-center`}>
        {ratePoints}{" "}
      </p>
      <div
        className={`${currentState?.color} text-3xl text-center uppercase font-mono flex justify-center gap-2 items-center`}
      >
        <p> {currentState?.state}</p>
        <p>{currentState?.icon}</p>
      </div>
      <div>
        <p className={`text-center font-serif text-gray-400`}>
          {currentState?.message}
        </p>
      </div>
    </div>
  );
}
