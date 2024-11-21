"use client";
import React, { useState } from "react";
import { FaMap } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import { MobileSidebar } from "./asidebar";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className="border-b flex justify-between items-center md:px-16 px-4 py-6">
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <FaMap size={32} />
          <h1 className="text-3xl font-sans font-semibold">WhatBytes</h1>
        </div>

        {/* Profile Button */}
        <Button
          className="md:flex gap-1 px-4 h-[40px] text-base font-semibold hidden"
          variant={"outline"}
        >
          <span className="w-[30px] h-[30px] rounded-full bg-gray-300 text-black flex justify-center items-center font-light">
            H
          </span>
          Harsh Pawar
        </Button>

        {/* Hamburger Icon */}
        <GiHamburgerMenu
          className="md:hidden block cursor-pointer"
          size={24}
          onClick={toggleSidebar}
        />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && <MobileSidebar closeSidebar={toggleSidebar} />}
    </>
  );
};

export default Header;
