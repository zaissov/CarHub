import { DriveProps } from "@/types";
import React, { Fragment } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import CustomButton from "./CustomButton";
interface DriveDetailsProps {
  
    drive: DriveProps;
  }

const DriversDeatails = ({drive}:DriveDetailsProps) => {
  
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px]
            rounded-full bg-primary-blue"
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => {}}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-md">
        <DialogHeader>
          <DialogTitle>
            {/**Titlo */}
          </DialogTitle>
          <DialogDescription className="text-gray-500 p-5">
              {/**Descriacao */}
           
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 flex flex-col gap-3">
          <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
          { /** 
           * 
           * <Image
              src={''}
              alt="drive model"
              fill
              priority
              className="object-contain"
            />*/ }
          </div>

          
        </div>
        <DialogFooter>
            {/**  <CustomButton/> */}
        
        </DialogFooter>

        <DialogDescription className="p-10">
        <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {drive.name}
                      {drive.apelido}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(drive).map(([key, Value]) => (
                        <div
                          className="flex justify-between gap-5  w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-black-100">
                            {Value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DriversDeatails;
