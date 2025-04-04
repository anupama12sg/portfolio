import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { companies, testimonials } from '../data'

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Kind words from {' '}
                <span className="text-purple">kind people</span>
            </h1>
            <div className="flex flex-col items-center justify-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className='flex flex-col items-center md:max-w-60 max-w-32 gap-2'>
                            <img 
                                src={img} 
                                alt={name} 
                                className='md:w-12 w-8'  // Adjusted sizes
                            />
                            <img 
                                src={nameImg} 
                                alt={name} 
                                className='md:w-28 w-24'  // Adjusted sizes
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients;
