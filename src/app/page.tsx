'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IoMdTrophy } from 'react-icons/io';
import { MdOutlineEventNote } from 'react-icons/md';
import { FaCheckSquare } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { ComparisonGraph } from '@/components/ComparisonGraph';
import UpdateScore from '@/components/update-score-popup';
import { formatDate } from '@/lib/utils';

export default function SkillDashboard() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [rank, setRank] = React.useState(4);
  const [percentile, setPercentile] = React.useState(90);
  const [score, setScore] = React.useState(12);
  const [date , setDate] = React.useState("5 June 2021")
  let data = null;

  
  const handleUpdate = (newRank: any, newPercentile: any, newScore: any) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
    setDate(formatDate(new Date().toDateString()))

    const data = {rank:newRank , percentile:newPercentile , score:newScore , lastUpdated:formatDate(new Date().toDateString())}
    localStorage.setItem( "data" , JSON.stringify(data))
  };

  React.useEffect(()=>{
    data = localStorage.getItem("data")
    if(data){
      data = JSON.parse(data)
      setRank(data?.rank);
      setPercentile(data?.percentile)
      setScore(data?.score)
      setDate(data?.lastUpdated)
    }
  },[])

  return (
    <div className="flex flex-col w-full overflow-y-scroll pb-32 bg-gray-50 min-h-screen p-4 md:p-6">
      <div className="mb-6 md:mb-8">
        <p className="text-muted-foreground text-base md:text-lg font-medium">Skill Test</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full md:w-[60%]">
          {/* Test Summary */}
          <Card className="bg-white shadow-md border border-gray-200">
            <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2 py-4 md:py-6">
              <Image
                src="/html.png"
                alt="html"
                width={100}
                height={100}
                className="p-0 m-0 w-16 h-16"
              />
              <div className="flex-1">
                <h2 className="text-base md:text-lg font-semibold text-black text-left">
                  Hyper Text Markup Language
                </h2>
                <p className="text-gray-600 text-sm font-medium">
                  Questions: {score} | Duration: 15 mins | Submitted on {date}
                </p>
              </div>
              <Button
                className="bg-blue-900 text-white hover:bg-blue-800 px-4 md:px-6 py-2 md:py-4 rounded-lg border-black border-2"
                onClick={() => setShowPopup(true)}
              >
                Update
              </Button>
            </CardContent>
          </Card>

          {/* Quick Statistics */}
          <Card className="shadow-md h-auto">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-semibold text-gray-800">
                Quick Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="flex md:flex-row flex-col  md:justify-around gap-4 md:gap-0 h-auto flex-shrink flex-wrap space-y-4">
              <div className="text-center flex items-center gap-4 w-full md:w-auto">
                <div className="rounded-full bg-gray-100 h-12 w-12 flex justify-center items-center">
                  <IoMdTrophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                </div>
                <div className="flex flex-col md:justify-start items-start md:items-center">
                  <div className="text-lg md:text-xl font-extrabold text-black">{rank}</div>
                  <p className="text-xs md:text-sm text-muted-foreground font-semibold">YOUR RANK</p>
                </div>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-12" />
              <div className="text-center flex items-center gap-4 w-full md:w-auto">
                <div className="rounded-full bg-gray-100 h-12 w-12 flex justify-center items-center">
                  <MdOutlineEventNote className="w-6 h-6 md:w-8 md:h-8 text-stone-500" />
                </div>
                <div className="flex flex-col md:justify-start items-start md:items-center">
                  <div className="text-lg md:text-xl font-extrabold text-black">{percentile}%</div>
                  <p className="text-xs md:text-sm text-muted-foreground font-semibold">
                    PERCENTILE
                  </p>
                </div>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-12" />
              <div className="text-center flex items-center gap-4 w-full md:w-auto">
                <div className="rounded-full bg-gray-100 h-12 w-12 flex justify-center items-center">
                  <FaCheckSquare className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <div className="flex flex-col md:justify-start items-start md:items-center">
                  <div className="text-lg md:text-xl font-extrabold text-black">{score}/15</div>
                  <p className="text-xs md:text-sm text-muted-foreground font-semibold">
                    CORRECT ANSWERS
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Graph */}
          <ComparisonGraph percentage={percentile} />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[40%] flex flex-col gap-4">
          {/* Syllabus Analysis */}
          <Card className="shadow-md pb-4">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-semibold text-gray-800">
                Syllabus Wise Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {[
                {
                  topic: 'HTML Tools, Forms, History',
                  value: 80,
                  color: 'bg-blue-500',
                  bgColor: 'bg-blue-100',
                  textColor: 'text-blue-500',
                },
                {
                  topic: 'Tags & References in HTML',
                  value: 60,
                  color: 'bg-orange-500',
                  bgColor: 'bg-orange-100',
                  textColor: 'text-orange-500',
                },
                {
                  topic: 'Tables & References in HTML',
                  value: 24,
                  color: 'bg-red-500',
                  bgColor: 'bg-red-100',
                  textColor: 'text-red-500',
                },
                {
                  topic: 'Tables & CSS Basics',
                  value: 96,
                  color: 'bg-green-500',
                  bgColor: 'bg-green-100',
                  textColor: 'text-green-500',
                },
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1 text-muted-foreground font-medium">
                    <span>{item.topic}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`relative w-full h-4 ${item.bgColor} rounded-md overflow-hidden`}
                    >
                      <div
                        className={`absolute top-0 left-0 h-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                    <span className={`${item.textColor} font-semibold`}>{item.value}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>


        {/* Question Analysis */}
        <Card className="md:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black flex justify-between items-center w-full">Question Analysis 
              <span className='font-medium text-purple-500 text-sm'>{score}/15</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col  items-center gap-8 w-full">
            <p className='text-muted-foreground w-full text-sm'>
            <span className="text-gray-600 font-semibold">You scored {score} question correct out of 15. </span>However it is still needs some improvements.
            </p>

            <div className="relative w-40 h-40">
           <div className="absolute inset-0 rounded-full border-[24px] border-blue-500" />
      
             <div className="absolute inset-0 rounded-full border-[24px] border-blue-500 border-b-transparent"/>
      
             <div className="absolute inset-0 flex items-center justify-center">
            <div className=" p-2 rounded-full">
          <   Image className="text-destructive-foreground rounded-full" src={"/target.png"} width={50} height={50} alt='image'/>
            </div>
      </div>
    </div>
          </CardContent>
        </Card>
      </div>
    </div>

    {showPopup && (
        <UpdateScore
          rank={rank}
          percentile={percentile}
          score={score}
          onClose={() => setShowPopup(false)} 
          onSave={handleUpdate} 
        />
      )}
 </div>

   
  )
}
