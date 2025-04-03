import React, { useState } from 'react';
import {ChartsOverviewData} from './Home/ChartsOverview';
import BalanceChart from './BalanceChart';
import { WantVsNeed } from './WantVsNeed';
import Savings from './Savings'

const ChartCarousel = ({displayData}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Chart components/slides
  const slides = [
    {
      id: 'expenses',
      title: 'Expenses Chart',
      component: () => (
        <div className="w-full h-full flex items-center justify-center text-white">
          <ChartsOverviewData displayData={displayData} />
        </div>
      )
    },
    {
      id: 'savings',
      title: 'Savings Chart',
      component: () => (
        <div className="w-full h-full flex items-center justify-center text-white">
          <Savings displayData={displayData}/>
        </div>
      )
    },
    {
      id: 'income-vs-expense',
      title: 'Income vs Expense Chart',
      component: () => (
        <div className="w-full h-full flex items-center justify-center text-white">
          <BalanceChart displayData={displayData}/>
        </div>
      )
    },
    {
      id: 'wants-vs-needs',
      title: 'Wants vs Needs Chart',
      component: () => (
        <div className="w-full h-full flex items-center justify-center text-white">
          <WantVsNeed displayData={displayData}/>
        </div>
      )
    }
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Navigation buttons */}
      <div className="flex justify-center space-x-2 mb-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer px-6 py-2 font-semibold rounded-md transition-colors ${
              index === activeIndex
                ? 'bg-[#7f5efd] text-white'
                : 'bg-purple-200 text-purple-700 hover:bg-purple-300'
            }`}
          >
            {index === 0 ? 'Expenses' : 
             index === 1 ? 'Savings' : 
             index === 2 ? 'Income vs Expense' : 'Wants vs Needs'}
          </button>
        ))}
      </div>
      
      {/* Chart display area with clean design without arrows */}
      <div className="rounded-lg overflow-hidden relative flex-1 w-full">
        {/* The active chart component */}
        <div className="h-full w-full flex items-center justify-center">
          {slides[activeIndex].component()}
        </div>
      </div>
    </div>
  );
};

export default ChartCarousel;