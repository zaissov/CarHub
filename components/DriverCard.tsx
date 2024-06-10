
import { DriveProps } from '@/types';
import React, { useState } from 'react'
import CustomButton from './CustomButton';
import DriversDeatails from './DriversDeatails';


interface CarDriveProps {
    drive: DriveProps;
  }
const DriverCard = ({drive}:CarDriveProps) => {
   const { 
    lincenceCard,
    name,
    tvde}=drive
    const[isOpen,setIsOpen]=useState(false);

  return (
    <div className="car-card group">
    <div className="car-card__content">
      <h2 className="car-card__content-title">
        {name} 
      </h2>
    </div>
    
    {/**Imagem */}
    <div className="relative w-full h-40 my-3 object-contain">
    {/**Imagem */}
    </div>
    <div className="relative flex w-full mt-2">
      <div className="flex group-hover:invisible w-full justify-between text-gray">
       
        
       
      <div className="car-card__btn-container">
        <CustomButton
          title="View More"
          containerStyles="w-full py-[16px]
          rounded-full bg-primary-blue"
          textStyles='text-white text-[14px] leading-[17px] font-bold'
          rightIcon='/right-arrow.svg'
          handleClick={() => setIsOpen(true)}
        />
      </div>
    </div>
   
    <DriversDeatails drive={drive}/>

  </div>
  </div>
  )
}

export default DriverCard