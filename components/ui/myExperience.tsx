import React from 'react'
import { workExperience } from '../../data';

const Experience = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                My {' '}
                <span className="text-purple">Work Experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <button>
                        <div>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                        </div>
                    </button>
                ))}

            </div>
        </div>
    )
}

export default Experience;