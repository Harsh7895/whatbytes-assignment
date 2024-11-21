"use client"
import { RiBarChartFill } from "react-icons/ri";
import { TfiMedallAlt } from "react-icons/tfi";
import { GrNote } from "react-icons/gr";
import React, { useEffect } from 'react'
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "./ui/drawer";
import Link from "next/link";
import { Button } from "./ui/button";

  export const Asidebar = () => {
  return (
      <aside className="border-r w-[20%] pr-4 py-16 md:flex flex-col gap-8 items-center justify-start hidden h-full">
            <Link href={"#"} className="flex items-center  py-4 font-semibold w-full text-lg text-muted-foreground">
              <RiBarChartFill size={25} className="mx-4 ml-6 " color="black"/>
              DashBoard
            </Link>
            <Link href={"/"} className="flex items-center py-4 font-semibold w-full text-lg text-blue-600 bg-sky-50 rounded-r-3xl">
              <TfiMedallAlt size={25} className="mx-4 ml-6"/>
              Skill Test
            </Link>
            <Link href={"#"} className="flex items-center  py-4 font-semibold w-full text-lg text-muted-foreground">
              <GrNote size={25} className="mx-4 ml-6 rotate-180" color="black"/>
              Internship
            </Link>
          </aside>
  )
}

export const MobileSidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = ''; 
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 md:hidden">
      <div className="w-64 bg-white h-full shadow-md ">
        {/* Sidebar Content */}
        <div className="p-6 flex flex-col gap-8">
          <Link
            href={"#"}
            className="flex items-center py-4 font-semibold text-lg text-muted-foreground"
            onClick={closeSidebar}
          >
            <RiBarChartFill size={25} className="mx-4 ml-6" />
            DashBoard
          </Link>
          <Link
            href={"/"}
            className="flex items-center py-4 font-semibold text-lg text-blue-600 bg-sky-50 rounded-r-3xl"
            onClick={closeSidebar}
          >
            <TfiMedallAlt size={25} className="mx-4 ml-6" />
            Skill Test
          </Link>
          <Link
            href={"#"}
            className="flex items-center py-4 font-semibold text-lg text-muted-foreground"
            onClick={closeSidebar}
          >
            <GrNote size={25} className="mx-4 ml-6 rotate-180" />
            Internship
          </Link>
        </div>
        <button
          className="absolute top-[20px] right-4  bg-gray-200 rounded-full h-8 w-8"
          onClick={closeSidebar}
        >
          ✕
        </button>
        <Button
          className="md:flex gap-1 px-4 h-[40px] text-base font-semibold hidden"
          variant={"outline"}
        >
          <span className="w-[30px] h-[30px] rounded-full bg-gray-300 text-black flex justify-center items-center font-light">
            H
          </span>
          Harsh Pawar
        </Button>
      </div>
    </div>
  );
};