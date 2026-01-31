
import React from 'react';
import { HIGHLIGHTS } from '../constants';

const Carousel: React.FC = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-0 mt-2">
      <div className="flex items-stretch p-4 gap-4">
        {HIGHLIGHTS.map((item) => (
          <div key={item.id} className="flex h-full flex-1 flex-col gap-3 rounded-xl min-w-[280px]">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-xl flex flex-col relative overflow-hidden group shadow-md"
              style={{ backgroundImage: `url("${item.imageUrl}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase">{item.badge}</span>
                <p className="text-base font-bold leading-tight mt-1">{item.name}</p>
                <p className="text-xs font-normal opacity-90">{item.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
