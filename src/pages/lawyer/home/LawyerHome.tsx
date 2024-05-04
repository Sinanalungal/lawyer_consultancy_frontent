import React, { ReactElement, useState, lazy, Suspense } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/slice/LoginActions';
import { FiLogOut } from "react-icons/fi";



const DashboardComponent = lazy(() => import('../homePages/DashboardComponent'));
const ScheduledSession = lazy(() => import('../homePages/ScheduledSession'));



function LawyerHome() {
   const [open, setOpen] = useState(false);
   const [ind, setIndex] = useState(0);
   const dispatch =useDispatch()
   interface Option {
      name: string;
      icon: ReactElement;
      onClick: () => void;
   }

   const options: Option[] = [
      { name: 'Dashboard', icon: <RiDashboard3Fill size={30} />, onClick: () => {} },
      { name: 'session', icon: <RiDashboard3Fill size={30} />, onClick: () => {} },

   ];

   // Toggle sidebar
   const handleSidebarToggle = () => {
      setOpen(!open);
   };

   // Handle option click
   const handleOptionClick = (index: number) => {
      if (ind !== index) {
         setIndex(index);
         // setOpen(false);
      }
   };

   return (
      <>
         <div className='w-full h-screen flex'>
            {open && (
               <div className='w-full sm:hidden min-h-screen fixed ease-in-out z-50 bg-white'>
                  <div className='w-full p-5 flex justify-end'>
                     <IoClose className='cursor-pointer' onClick={handleSidebarToggle} size={30} />
                  </div>
                  {options.map((option, index:number) => (
                     <div
                        key={index}
                        onClick={() => {handleOptionClick(index);setOpen(false);}}
                        className={`w-full h-16 flex justify-start items-center p-5 cursor-pointer ${
                           ind === index ? 'bg-slate-700 text-white' : 'text-black'
                        }`}
                     >
                        <span>{option.icon}</span>
                        <span className='ml-3 font-semibold'>{option.name}</span>
                     </div>
                  ))}
               </div>
            )}
            <div className={`${open ? 'w-64' : 'w-28'} h-full fixed  max-sm:hidden shadow-md border-gray-200 bg-slate-50`}>
               <div className='h-[70px] w-full bg-slate-50'></div>
               {options.map((option, index) => (
                  open?(<div key={index} onClick={()=> handleOptionClick(index) } className={(ind==index?'w-full bg-slate-700  shadow-lg h-16 flex justify-start text-white items-center p-5 cursor-pointer':'w-full  h-16 flex justify-start dark:text-black text-dark items-center p-5 cursor-pointer')}><span>{option.icon}</span> <span className='ml-3  font-semibold'>{option.name}</span></div>):(<div key={index} onClick={()=> handleOptionClick(index) } className={ind==index?'w-full  h-16 p-3 text-white bg-slate-700 shadow-xl flex items-center justify-center cursor-pointer':'w-full  h-16 p-3  text-black flex items-center justify-center cursor-pointer'}>{option.icon}</div>)
               ))}
            </div>
            <div className={`${open ? 'sm:ml-64' : 'sm:ml-28'} w-full min-h-screen flex flex-col bg-white`}>
                <div className='w-full fixed z-40 h-[70px] flex items-center bg-slate-50 shadow-sm justify-between px-4'>
                    <TiThMenu className='cursor-pointer' onClick={handleSidebarToggle} size={30}/>
                    <div className={`${open?'sm:mr-64':'sm:mr-28'} flex items-center rounded-xl `}>
                        <div className='w-12 h-12 bg-black mr-3'></div>
                        <div onClick={()=>dispatch(logout())}><FiLogOut size={27}/></div>
                     </div>
                </div>
            <div className='w-full pt-[70px] bg-blend-saturation saturate-200'>
               <Suspense fallback={<div>Loading...</div>}>
                  {ind === 0 && <DashboardComponent />}
                  {ind === 1 && <ScheduledSession />}
               </Suspense>
            </div>
            </div>
         </div>
      </>
   );
}

export default LawyerHome;
