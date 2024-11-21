"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsGraphUp } from "react-icons/bs";

// Define the props interface
interface ComparisonGraphProps {
  percentage: number; // Dynamic percentage to highlight
}

export function ComparisonGraph({ percentage }: ComparisonGraphProps) {
  const chartData = [
    { x: 0, y: 0 },
    { x: 5, y: 15 },
    { x: 10, y: 30 },
    { x: 15, y: 45 },
    { x: 20, y: 55 },
    { x: 25, y: 65 },
    { x: 30, y: 72 },
    { x: 35, y: 80 },
    { x: 40, y: 85 },
    { x: 45, y: 50 },
    { x: 50, y: 45 },
    { x: 55, y: 43 },
    { x: 60, y: 35 },
    { x: 65, y: 32 },
    { x: 70, y: 20 },
    { x: 75, y: 30 },
    { x: 80, y: 35 },
    { x: 85, y: 20 },
    { x: 90, y: 10 },
    { x: 95, y: 5 },
    { x: 100, y: 25, text: "topped" },
  ];

  // Add a custom point for the user's percentage
  const userPoint = {
    x: percentage,
    y: chartData.find((point) => point.x === percentage)?.y || 0, 
    text: "Your percentage",
  };

  // Ensuring the user's percentage point is included in the chart data
  const updatedChartData = [...chartData, userPoint].sort((a, b) => a.x - b.x); 

  return (
    <Card className="md:col-span-2 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-extrabold text-black">
          Comparison Graph
        </CardTitle>
        <div className="flex justify-between gap-8 items-center">
          <p className="text-muted-foreground">
            <span className="text-gray-600 font-semibold">Your scored {percentage}% percentile </span> which is higher than average percentile 72% of all the engineers who took the assesment
          </p>
          <div className='rounded-full bg-gray-100 h-12 w-12 flex justify-center items-center ml-8 flex-nowrap flex-shrink-0'>
            <BsGraphUp className="w-6 h-6 mx-auto mb-2 text-red-500 mt-1" />
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={updatedChartData}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 10,
              }}
            >
              <XAxis
                dataKey="x"
                domain={[0, 100]} 
                ticks={[0, 25, 50, 75, 100]} 
                interval={0} 
                type="number"
                label={{ value: "", position: "insideBottom", offset: -5 }}
                tick={{ fill: "#808080" }}
                axisLine={{ stroke: "#808080" }}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                content={({ payload }) => {
                  if (payload?.[0]) {
                    const point = payload[0].payload;
                    return (
                      <div className="bg-white p-2 shadow-md border rounded-md text-sm text-gray-600">
                        {point.text || `x: ${point.x}, y: ${point.y}`}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#808080"
                strokeWidth={2}
                dot={{ stroke: "#808080", strokeWidth: 2, fill: "#ffffff" }}
                activeDot={{
                  r: 6,
                  fill: percentage === userPoint.x ? "#ef4444" : "#ffffff", 
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
