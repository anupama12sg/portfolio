import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { testimonials } from '../data'

const Clients = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                Kind words from {' '}
                <span className="text-purple">kind people</span>
            </h1>
            <div className="flex flex-col items-center justify-center">
                <div className="h-[70vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients