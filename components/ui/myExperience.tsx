import React from 'react';
import { workExperience } from '../../data';

const Experience = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                My <span className="text-purple">Work Experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <button
                        key={card.id}
                        style={{
                            borderRadius: '1.75rem',
                            transitionDuration: `${Math.floor(Math.random() * 10000) + 10000}ms`,
                        }}
                        className="flex flex-col justify-between bg-black text-white border-neutral-200 dark:border-slate-800 p-6"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="text-center">
                                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                                <p className="text-white-100 mt-3 font-semibold">{card.desc}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
