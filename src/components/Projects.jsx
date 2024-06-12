import React from 'react';

export default function Projects({ logo, title, position, toggle, handleToggle }) {
    return (
        <div 
            className={`w-[280px] h-[80px] rounded-xl ease duration-300 p-4 ${toggle ? 'border-btn-color border-[1.5px]' : 'border-project-border-color border-[1px]'}`}
        >
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <div className='h-[48px] w-[48px] rounded-[10px] overflow-hidden -top-[30px] mr-2'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div>
                        <h1 className='font-sf-pro text-base font-medium text-main-text-color leading-[25.6px]'>{title}</h1>
                        <h2 className='font-sf-pro text-xs font-normal text-secondary-text-color leading-[19.2px]'>{position}</h2>
                    </div>
                </div>
                <div className='w-[24px] h-[24px]'>
                    <div 
                        className={`w-[22px] h-[14px] rounded-[10px] border-[1px] p-[2px] ease duration-300 flex items-center ${toggle ? 'justify-end border-btn-color bg-btn-color' : 'border-switch-border'}`}
                        onClick={handleToggle}
                    >
                        <div className={`w-[8px] h-[8px] ease duration-300 rounded ${toggle ? 'bg-white' : 'bg-switch-border'}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


