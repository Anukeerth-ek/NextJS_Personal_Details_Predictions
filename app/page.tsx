"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function Home() {
     const [inputVal, setInputVal] = useState("");
     const { push } = useRouter();
     const handleSubmit = (event: FormEvent) => {
          event.preventDefault();
          push(`/predictions/${inputVal}`);
     };

     return (
          <div className="bg-blue-300 h-[100vh] flex items-center justify-center flex-col ">
               <h1 className="relative bottom-24 text-4xl">Predict Your Details</h1>

               <form onSubmit={handleSubmit} className="flex flex-col items-center border border-white p-12">
                    <div className="flex items-center ">
                         <input
                              type="text"
                              placeholder="Enter you name..."
                              onChange={(e) => setInputVal(e.target.value)}
                              value={inputVal}
                              className="border-black rounded-xl pl-3 py-1 w-[300px]"
                         />
                    </div>
                    <div className="bg-blue-500 w-full text-center rounded-xl mt-3 p-1 text-white">
                         <button type="submit">Enter</button>
                    </div>
               </form>
          </div>
     );
}
