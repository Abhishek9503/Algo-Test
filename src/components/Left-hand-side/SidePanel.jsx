import React, { useState } from 'react'
import MenuIcon from '../../assets/icons/MenuIcon'
import { ViewGridOutline , LighBulbOutline, CommunityIcon, ClipboardIcon, ChartBarIcon, StarIcon } from '../../assets/icons';
import Button from '../Button';


const sidePanelItems = [
    { id: 1, label: 'Dashboard', icon: ViewGridOutline },
    { id: 2, label: 'Learn', icon: LighBulbOutline },
    { id: 3, label: 'Forums', icon: CommunityIcon },
    { id: 4, label: 'Upskill', icon: ClipboardIcon },
    { id: 5, label: 'Contest', icon: ChartBarIcon },
    { id: 6, label: 'Leaderboard', icon: StarIcon },
  ];


const SidePanel = () => {

    const [selectedItem, setSelectedItem] = useState(1);


    return (
        <div className="w-64 h-full p-4 flex flex-col items-center ">
          <div className="flex items-center gap-2 mb-7">
            <MenuIcon width={32} height={32} fill="#000" />
            <h2 className="font-extrabold text-[25px]">AlgoZenith</h2>
          </div>
    
          <nav>
            {sidePanelItems.map((item) => (
              <div className='mb-3'>
                <Button
                key={item.id}
                icon={item.icon}
                label={item.label}
                isSelected={selectedItem === item.id}
                onClick={() => setSelectedItem(item.id)}
              />
              </div>
            ))}
          </nav>
        </div>
      );
    };
    
    export default SidePanel;