'use client';

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  ArrowBigRight } from 'lucide-react';

export default function UpdateScore({ rank, percentile, score, onClose, onSave }: any) {
  const [updatedRank, setUpdatedRank] = useState(rank);
  const [updatedPercentile, setUpdatedPercentile] = useState(percentile);
  const [updatedScore, setUpdatedScore] = useState(score);

    // Disable scroll when popup is open
    useEffect(() => {
      document.body.style.overflow = 'hidden'; 
      return () => {
        document.body.style.overflow = ''; 
      };
    }, []);

  const handleSave = () => {
    onSave(updatedRank, updatedPercentile, updatedScore); 
    onClose(); // Close popup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white w-[100%] max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Update Scores</h2>
        <div className="space-y-4">
          {/* Update Rank */}
          <div className='flex justify-between items-center md:flex-row flex-col'>
            <Label htmlFor="rank" className="flex items-center gap-2 mb-2 flex-shrink-0">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white text-primary text-sm">1</div>
              Update your <span className='font-bold text-black'>Rank</span>
            </Label>
            <Input
              id="rank"
              value={updatedRank}
              onChange={(e) => setUpdatedRank(e.target.value)}
              className="w-[30%] flex-shrink ml-2 border-blue-500"
            />
          </div>

          {/* Update Percentile */}
          <div className='flex justify-between items-center md:flex-row flex-col'>
            <Label htmlFor="percentile" className="flex items-center gap-2 mb-2 flex-shrink-0">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white text-sm">2</div>
              Update your <span className='font-bold text-black'>Percentile</span>
            </Label>
            <Input
              id="percentile"
              value={updatedPercentile}
              onChange={(e) => setUpdatedPercentile(e.target.value)}
              className="w-[30%] flex-shrink ml-2 border-blue-500"
            />
          </div>

          {/* Update Current Score */}
          <div className='flex justify-between items-center md:flex-row flex-col'>
            <Label htmlFor="score" className="flex items-center gap-2 mb-2 flex-shrink-0">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white text-sm">3</div>
              Update your <span className='text-black font-bold'>Current Score (out of 15)</span>
            </Label>
            <Input
              id="score"
              value={updatedScore}
              onChange={(e) => setUpdatedScore(e.target.value)}
              className="w-[30%] flex-shrink border-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" className='text-blue-800 border-blue-800 text-xs font-bold' onClick={onClose}>
            Cancel
          </Button>
          <Button className="px-8 bg-blue-800 font-bold text-xs" onClick={handleSave}>
            Save <ArrowBigRight/>
          </Button>
        </div>
      </div>
    </div>
  );
}
