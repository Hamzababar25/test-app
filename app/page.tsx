"use client";
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { TiGift } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiDashboard } from "react-icons/tfi";
import { CiWallet } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { RiExchangeLine } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { SiBitcoinsv } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbCurrencyBitcoin } from "react-icons/tb";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RxArrowTopLeft } from "react-icons/rx";
import { RxArrowBottomRight } from "react-icons/rx";



export default function Home() {


  interface results {
    Country: string;
    Mfr_ID:number;
    Mfr_Name:string;
  }

  interface Cars {
  
    Results?: results[];
    }
    interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}


interface Pokemon {
  base_experience: number;
  abilities?: Ability[];
  game_indices?: GameIndex[];
  statss?:Stat[];
  // Add other properties as needed
}


 const [data, setData] = useState<Pokemon | null>(null); // Set data as null or an empty object
 const [cardata, carData] = useState<Cars | null>(null); // Set data as null or an empty object

console.log("world:",data)
console.log("car:",cardata?.Results)

 useEffect(() => {
    async function getUsers() {
      try {
        const { data: responseData, status } = await axios.get<Pokemon>(
          'https://pokeapi.co/api/v2/pokemon/ditto/',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );

        // console.log('response status is: ', status);
        // console.log('Fetched Data:', responseData);

        setData(responseData); // Set the state with the fetched data
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }

    getUsers();
  }, []);


  useEffect(() => {
    async function getCars() {
      try {
        const { data: responseData, status } = await axios.get<Cars>(
          'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );

        console.log('response status is: ', status);
        console.log('Fetched Data:', responseData);

        carData(responseData); // Set the state with the fetched data
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }

    getCars();
  }, []);



  return (
    
   <div className='min-h-screen min-w-full flex flex-wrap'>


    <div className='w-full h-36 flex items- border border-b-slate-300 '>

    <div className='h-5/5 w-[10%] bg-slate-200 flex items-end pb-4 pl-4 border-r-2 border-slate-200 '>
      <div className='h-14 w-28 flex items-center '>
        <h1 className='text-3xl font-semibold '>Wallet</h1>
      </div>
    </div>

    <div className='h-full w-[90%] flex  justify-end items-center border-blue-900 '>
      <div className='h-20 w-[40%] flex flexrow items-center gap-6'>
        <div className='h-14 w-[55%] bg-slate-100 rounded-3xl flex items-center '>
        <CiSearch className="text-2xl  text-black ml-2" />
          <input placeholder='Search' className='h-14 w-full  bg-slate-100 pl-2 rounded-3xl'></input>
        </div>

        <div className='h-10 w-10 rounded-full bg-slate-100 pt-2'><FaRegBell className="text-2xl  text-black ml-2" /></div>
        <div className='h-10 w-10 rounded-full  bg-slate-100 pt-2'><MdOutlineMessage className="text-2xl  text-black ml-2" /></div>
        <div className='h-10 w-10 rounded-full  bg-slate-100 pt-2'><TiGift className="text-2xl  text-black ml-2" /></div>
        <div className='h-10 w-10 rounded-full  bg-slate-100 pt-2'><IoSettingsOutline className="text-2xl  text-black ml-2" /></div>
      </div>

    </div>

    </div>

    <div className='h-[49.2rem] w-[10%] bg-slate-200 flex flex-col  -top-2     border-r-2 border-slate-200 '>

      <div className=' flex flex-col gap-y-2 h-[70%] w-[100%]  justify-center  '>

        <div className='flex h-[8%] w-[90%] gap-4 '>
          
        <TfiDashboard className="text-2xl  text-black ml-2" />

        

        <h1>Dashboard</h1>
          
           </div>

           
             <div className='flex h-[8%] w-[90%] gap-4 '>
          
          <CiWallet className="text-2xl  text-black ml-2" />
  
          
  
          <h1>My Wallet</h1>
            
             </div>
             <div className='flex h-[8%] w-[90%] gap-4 '>
          
          <FaCoins className="text-2xl  text-black ml-2" />
  
          
  
          <h1>Transactions</h1>
            
             </div>
             <div className='flex h-[8%] w-[90%] gap-4 '>
          
          <CiDollar className="text-2xl  text-black ml-2" />
  
          
  
          <h1>Crypto</h1>
            
             </div>
             <div className='flex h-[8%] w-[90%] gap-4 '>
          
          <RiExchangeLine className="text-2xl  text-black ml-2" />
  
          
  
          <h1>Exchange</h1>
            
             </div>
             <div className='flex h-[8%] w-[90%] gap-4 '>
          
          <IoSettingsOutline className="text-2xl  text-black ml-2" />
  
          
  
          <h1>Setting</h1>
            
             </div>

      </div>


<div className='h-[30%] w-full justify-center flex flex-col pl-4 '>
  <div className='flex h-[60%] w-[90%] rounded-3xl bg-blue-950 flex-col '>
    <div className='flex h-[20%] w-[90%] gap-14 items-center justify-center pt-5 '>
     <MdHistory className="text-3xl mt-2  text-white ml-2" />
   < BsThreeDotsVertical className="text-xl  text-white ml-2" />
    </div>

    <div className='flex h-[20%] w-[90%] gap-14 items-center justify-center pt-6 '>
      <p className=" text-white text-sm pt-3 ml-3 font-semibold ">History Available</p>
    </div>

    <div className='flex h-[20%] w-[90%]  items-center justify-center pt-5 '>
      <p className=" text-white text-xs pt-5 ml-4 mt-3 font-light ">Check your weekly transactions report</p>
    </div>


      
  </div>
</div>


    </div>

<div className='h-[50rem] w-[90%]'>
  <div className='h-full w-full flex items-center flex-col '>
    <div className='h-[12%] w-[90%] flex items-center gap-96'>
      <div> <h1 className='text-2xl  text-black ml-2'>Dashboard</h1> </div>
      <div className='flex h-[40%] w-[70%] items-center justify-end '>
             <button className='h-[70%] w-[10%] rounded-xl border border-slate-400 flex justify-center mr-10'><h1>Filter</h1> <MdHistory className="text-xl  mt-1 text-black ml-2" /></button>
      </div>
    </div>

    <div className="h-[20%] w-[90%] flex justify-between   ">
    <div className='flex h-[100%] w-[30%] rounded-3xl bg-sky-50 flex-col   '>
    <div className='flex h-[20%] w-[95%] gap-[20rem] items-center pl-8 pt-3   '>
    <div className=' flex items-center justify-center h-[3rem] w-[3rem] bg-black mt-9 rounded-xl'><TbCurrencyBitcoin className="text-3xl   text-white  " /></div>
   < BsThreeDotsVertical className="text-xl  text-black ml-2" />
    </div>

    <div className='flex h-[20%] w-[90%]  items-start justify-start pt-8 pl-6 '>
      <p className=" text-black text-3xl pt-3 ml-3 font-semibold ">{cardata?.Results?.length}</p>
    </div>

    <div className='flex h-[20%] w-[90%]   pt-6 pl-4 '>
      <p className=" text-black text-xs pt-5 ml-4 mt-3 font-light ">45 percent this week</p>
    </div>


      
  </div>

    <div className='flex h-[100%] w-[30%] rounded-3xl bg-violet-200 flex-col   '>
    <div className='flex h-[20%] w-[95%] gap-[20rem] items-center pl-8 pt-3   '>
    <div className=' flex items-center justify-center h-[3rem] w-[3rem] bg-black mt-9 rounded-xl'><TbCurrencyBitcoin className="text-3xl   text-white  " /></div>
   < BsThreeDotsVertical className="text-xl  text-black ml-2" />
    </div>

    <div className='flex h-[20%] w-[90%]  items-start justify-start pt-8 pl-6 '>
      <p className=" text-black text-3xl pt-3 ml-3 font-semibold ">{cardata?.Results?.length}</p>
    </div>

    <div className='flex h-[20%] w-[90%]   pt-6 pl-4 '>
      <p className=" text-black text-xs pt-5 ml-4 mt-3 font-light ">45 percent this week</p>
    </div>


      
  </div>
   <div className='flex h-[100%] w-[30%] rounded-3xl bg-rose-100 flex-col   '>
    <div className='flex h-[20%] w-[95%] gap-[20rem] items-center pl-8 pt-3   '>
    <div className=' flex items-center justify-center h-[3rem] w-[3rem] bg-black mt-9 rounded-xl'><TbCurrencyBitcoin className="text-3xl   text-white  " /></div>
   < BsThreeDotsVertical className="text-xl  text-black ml-2" />
    </div>

    <div className='flex h-[20%] w-[90%]  items-start justify-start pt-8 pl-6 '>
      <p className=" text-black text-3xl pt-3 ml-3 font-semibold ">{cardata?.Results?.length}</p>
    </div>

    <div className='flex h-[20%] w-[90%]   pt-6 pl-4 '>
      <p className=" text-black text-xs pt-5 ml-4 mt-3 font-light ">45 percent this week</p>
    </div>


      
  </div>
    </div>

    <div className=' h-16 w-[90%] items-center flex '><h1 className='text-2xl  text-black ml-2'>Pokimone move set</h1></div>

    <div className=' h-[62.9%] w-[100%]  flex  justify-end gap-20 '> 
    <div className='h-[100%] w-[60%] bg-sky'>
      
    <table class="table-auto ">
  <thead className=' '>
    <tr className=' '>
       <th className='w-[20%] text-black pr-20 pl-16'>Status</th>
      <th className='w-[20%] text-black pr-4'>Country</th>
      <th className='w-[30%] text-black pr-10'>Man Comp</th>
      <th className='w-[15%] text-black pr-4'>ID</th>
    </tr>
  </thead>
  <tbody>
  



    {/* <tr className='border'>
      <td className='w-[30%] border'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className='w-[30%] border pl-6'>Malcolm Lockyer</td>
      <td className='pl-10'>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr> */}

{/* Iterate through results if they exist */}
{cardata && cardata.Results && (
    <>
      {cardata.Results.slice(0,10).map((car, index) => (
        <tr className='text-black  ' key={index}>
          {/* Render each property from the Results interface */}
         <td className=' '> {(car.Mfr_ID>955 && car.Mfr_ID<957? <div className=' h-10 w-10 ml-[5.5rem]  rounded-md flex items-center bg-sky-200'>
         < RxArrowBottomRight className="text-xs   text-black pl-2  h-7 w-8  " />
         </div>: car.Mfr_ID>957? <div className=' h-10 w-10 ml-[5.5rem] rounded-md flex items-center  bg-purple-300'>
         < RxArrowTopLeft className="text-lg  text-black pl-2   h-7 w-8 rounded-md " />
         </div>:<div className='h-10 w-10 ml-[5.5rem] rounded-md flex items-center  bg-amber-200'>
         < RxArrowTopLeft className="text-base  text-black pl-2 h-7 w-8  " />
         </div>)}</td>
         
          <td className='text-black pl-2 pt-3 '>{car.Country}</td>
         
          <td className=' pl-6'>{car.Mfr_Name}</td>
           <td className='pl-16 items-center pt-2  '>{car.Mfr_ID}</td>
         
         
        </tr>
      ))}
    </>
  )}
  </tbody>
</table>
      </div>  
      
    

      <div className='h-[100%] w-[30%] '>


        <div className=' flex flex-col h-[80%] w-full bg-blue-950 rounded-l-[2.5rem]'>
               <div className='h-[12%] w-full  p-4 pl-11'><h1 className='text-xl text-white'> Cars Manufacturers</h1></div>
               <div className='h-[88%] w-full  rounded-l-[2.5rem] pt-2'>
               <table class="table-auto">
  <thead className=' '>
    <tr className=' '>
      <th className='w-[30%] text-white'>Country</th>
      <th className='w-[30%] text-white pr-10'>ID</th>
      <th className='w-[30%] text-white'>Man Comp</th>
    </tr>
  </thead>
  <tbody>
  



    {/* <tr className='border'>
      <td className='w-[30%] border'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className='w-[30%] border pl-6'>Malcolm Lockyer</td>
      <td className='pl-10'>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr> */}

{/* Iterate through results if they exist */}
{cardata && cardata.Results && (
    <>
      {cardata.Results.slice(0,5).map((car, index) => (
        <tr className='text-white' key={index}>
          {/* Render each property from the Results interface */}
          <td className='text-white pl-6 pt-3'>{car.Country}</td>
          <td className='pl-11 pt-2'>{car.Mfr_ID}</td>
          <td className=''>{car.Mfr_Name}</td>
        </tr>
      ))}
    </>
  )}
  </tbody>
</table>
               </div>

        </div>
   
      </div>  
      
      
      
      
      </div>


  </div>







</div>
   </div>

   


  )
}
