import { useState } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import NavBar from "./components/NavBar";
import RatingForm from "./components/RatingForm";
function App() {
  const [food, setFood] = useState();
  const [price, setPrice] = useState();
  const [service, setService] = useState();
  const [cleanliness, setCleanliness] = useState();
  const [ready, setReady] = useState(false);
  const data = [food, service, cleanliness, price];
  return (
    <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <div className="w-[90%] h-[150px] mx-auto shadow-xl my-10 p-6 rounded-xl italic">
        this is a sample of rating system based on a simple AI module(fuzzy
        logic)
      </div>
      <div className="flex flex-col gap-3 ">
        <RatingForm
          setRate={setFood}
          ready={ready}
          title={"food rate"}
          starsnum={10}
          fgroup={["bad", "acceptable", "good", "perfect"]}
        />
        <RatingForm
          ready={ready}
          setRate={setService}
          title={"service rate"}
          starsnum={10}
          fgroup={["bad", "good", "perfect"]}
        />
        <RatingForm
          ready={ready}
          setRate={setCleanliness}
          title={"cleanliness rate"}
          starsnum={10}
          fgroup={["dirty", "acceptable", "clean"]}
        />
        <RatingForm
          ready={ready}
          setRate={setPrice}
          title={"price rate"}
          starsnum={10}
          fgroup={["expensive", "approprite", "cheap"]}
        />
      </div>
      <div>
        <div className={"block px-3 my-5"}>
          <p
            className="cursor-pointer w-[30px] h-[30px] mx-auto rounded-full bg-green-500 flex justify-center items-center"
            onClick={() => {
              setReady(!ready);
            }}
          >
            <MdOutlineDoneOutline />
          </p>
        </div>
      </div>
      <div
        className={
          food && service && price && cleanliness
            ? "my-10 mx-10 flex justify-center flex-col items-center"
            : "hidden"
        }
      >
        <p className="text-2xl capitalize">let me get this straight </p>
        {data.map((el, i) => {
          return (
            <div key={i}>
              <p
                className={`${el?.currentState?.color} leading-8 text-xl my-2`}
              >
                the {el?.title} is {el?.currentState?.state} and you gave it{" "}
                {el?.rate} stars and you are {el?.currentState?.feel} about it,
              </p>
            </div>
          );
        })}
        <button
          className="w-[90px] h-[50px] mx-auto bg-green-400 rounded-xl p-1 text-white"
          onClick={() => {
            console.log(data);
          }}
        >
          send Data
        </button>
      </div>
    </div>
  );
}

export default App;
