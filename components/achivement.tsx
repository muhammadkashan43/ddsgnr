import React from 'react'

const Achivement = () => {
  return (
    <div className='max-w-[1280px] flex flex-col text-center p-9 gap-8 mt-9'>
        <h3 data-aos="fade-out" className='font-bold text-[28px] md:text-[48px] '>Our Achivement</h3>
        <p data-aos="fade-out" className='text-[17px] md:text-[18px] text-wrap w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className='flex flex-row gap-11 justify-between px-12 flex-wrap'>
            <div data-aos="fade-right" className=''>
                <h3 className='font-bold text-[28px]'>+200</h3>
                <p className='text-[16px]'>Courses</p>
            </div>
            <div data-aos="fade-right" className='gap-6'>
                <h3 className='font-bold text-[28px]'>50K</h3>
                <p className='text-[16px]'>Mentors</p>
            </div>
            <div data-aos="fade-left" className='gap-6'>
                <h3 className='font-bold text-[28px]'>370k</h3>
                <p className='text-[16px]'>Students</p>
            </div>
            <div data-aos="fade-left" className='gap-6'>
                <h3 className='font-bold text-[28px]'>+100</h3>
                <p className='text-[16px]'>Recognition</p>
            </div>
        </div>
    </div>
  )
}

export default Achivement