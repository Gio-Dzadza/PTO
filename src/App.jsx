import './App.css';
import Button from './components/Button';
import CurlyBrace from './components/CurlyBrace'
import avatar from './assets/avtr.jpg';
import Projects from './components/Projects';
import zenefits from './assets/projs/zenefits.png';
import sapling from './assets/projs/sapling.png';
import workday from './assets/projs/workday.png';
import xero from './assets/projs/xero.png';
import rippling from './assets/projs/rippling.png';
import expensify from './assets/projs/expensify.png';
import { useEffect, useState } from 'react';

function App() {
  const [switchColor, setSwitchColor] = useState({
    zenefits: false,
    sapling: false,
    workday: false,
    xero: false,
    rippling: false,
    expensify: false,
  });

  const [toggledProjects, setToggledProjects] = useState({
    zenefits: false,
    sapling: false,
    workday: false,
    xero: false,
    rippling: false,
    expensify: false,
  });
  const [activeButton, setActiveButton] = useState(null);

  const handleToggle = (project) => {
    setToggledProjects((prev) => ({
      ...prev,
      [project]: !prev[project],
    }));
    setSwitchColor((prev) => ({
      ...prev,
      [project]: !prev[project],
    }));
  };
  
  useEffect(() => {
    const areAllProjectsUnchecked = Object.values(toggledProjects).every((value) => !value)
    if (areAllProjectsUnchecked) {
      setActiveButton(null)
    }
  }, [toggledProjects])

  const handleButtonClick = (type) => {
    const newToggledProjects = {
      zenefits: false,
      sapling: false,
      workday: false,
      xero: false,
      rippling: false,
      expensify: false,
    };
    if (type === 'Small Business') {
      newToggledProjects.zenefits = true;
    } else if (type === 'Medium Business') {
      newToggledProjects.sapling = true;
      newToggledProjects.workday = true;
      newToggledProjects.expensify = true;
    } else if (type === 'Enterprise') {
      newToggledProjects.rippling = true;
      newToggledProjects.xero = true;
    }
    setToggledProjects(newToggledProjects);
    setSwitchColor(newToggledProjects);
    setActiveButton(type);
  };

  return (
    <div className='container mx-auto h-screen relative flex flex-col items-center w-[] sm:w-[1180px]'>
      <h1 className='text-center mt-[50px] sm:mt-[80px] w-[323px] sm:w-[779px] pb-6 font-bold text-4xl sm:text-6xl text-main-text-color leading-[43.2px] sm:leading-[83.2px] font-circular'>Easy Turn-Key Integration</h1>
      <h2 className='text-center text-base sm:text-lg w-[324px] sm:w-[745px] leading-[25.6px] sm:leading-[28.8px] font-normal text-secondary-text-color font-sf-pro'>
        Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.
      </h2>
      <div className='flex mt-[50px] mb-[80px] border-b border-[#e8e6ec] sm:border-none'>
        <Button text={'Small Business'} onClick={() => handleButtonClick('Small Business')} active={activeButton === 'Small Business'} />
        <Button text={'Medium Business'} onClick={() => handleButtonClick('Medium Business')} active={activeButton === 'Medium Business'} />
        <Button text={'Enterprise'} onClick={() => handleButtonClick('Enterprise')} active={activeButton === 'Enterprise'} />
      </div>
      <div className='flex flex-col sm:flex-row items-center gap-y-5'>
        <div className='flex flex-col gap-y-5 order-last sm:order-first mb-5 sm:mb-0'>
          <Projects logo={sapling} title={'Sapling'} position={'HR Management'} toggle={toggledProjects.sapling} handleToggle={() => handleToggle('sapling')} />
          <Projects logo={workday} title={'Workday'} position={'HR Management'} toggle={toggledProjects.workday} handleToggle={() => handleToggle('workday')} />
          <Projects logo={xero} title={'Xero'} position={'Employers Base'} toggle={toggledProjects.xero} handleToggle={() => handleToggle('xero')} />
        </div>
        <div className='hidden sm:block'>
          <CurlyBrace switchColor={switchColor.sapling} isToggled={toggledProjects.sapling}/>
          <CurlyBrace straighLine={true} switchColor={switchColor.workday} isToggled={toggledProjects.workday}/>
          <CurlyBrace leftUpside={true} switchColor={switchColor.xero} isToggled={toggledProjects.xero}/>
        </div>
        <div className='relative -ml-[2px] pt-[70px] px-[40px] pb-[45px] bg-person-card-bg w-[380px] h-[268px] rounded-3xl border-2 border-btn-color flex flex-col items-center'>
          <div className='absolute h-[86px] w-[86px] rounded-[10px] overflow-hidden -top-[30px]'>
            <img src={avatar} alt='avatar' className='h-full object-cover' />
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-sf-pro mb-1.5 text-lg font-bold leading-[25.2px] text-main-text-color'>Lauren Robson</h1>
            <h2 className='font-sf-pro mb-5 text-sm font-normal leading-[22.4px] text-secondary-text-color'>HR Director</h2>
            <p className='font-sf-pro text-center text-base leading-[25.6px] font-normal text-main-text-color'>“I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”</p>
          </div>
        </div>
        <div className='hidden sm:block'>
          <CurlyBrace right={true} switchColor={switchColor.rippling} isToggled={toggledProjects.rippling} />
          <CurlyBrace straighLine={true} switchColor={switchColor.expensify} isToggled={toggledProjects.expensify} />
          <CurlyBrace rightUpside={true} switchColor={switchColor.zenefits} isToggled={toggledProjects.zenefits} />
        </div>
        <div className='flex flex-col gap-y-5'>
          <Projects logo={rippling} title={'Rippling'} position={'Salary Management'} toggle={toggledProjects.rippling} handleToggle={() => handleToggle('rippling')} />
          <Projects logo={expensify} title={'Expensify'} position={'HR Management'} toggle={toggledProjects.expensify} handleToggle={() => handleToggle('expensify')} />
          <Projects logo={zenefits} title={'Zenefits'} position={'HR Management'} toggle={toggledProjects.zenefits} handleToggle={() => handleToggle('zenefits')} />
        </div>
      </div>
    </div>
  );
}

export default App;


