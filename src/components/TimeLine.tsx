'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    title: 'Web Developer and Designer',
    subtitle: 'DNAMYK',
    description: 'web development and design projects',
    date: '2025 - Present',
    type: 'work',
  },
  {
    title: 'Systems Engineering',
    subtitle: 'University foundation Tecnologico Comfenalco',
    description: 'in progress',
    date: '2025 - Present',
    type: 'education',
  },
  {
    title: 'Implementation apprentice',
    subtitle: 'ESTELA',
    description: 'My university internship, I learned technology project management. I focused on process automation and improving operational efficiency.',
    date: '2024 - 2024',
    type: 'work',
  },
  {
    title: 'Systems Assistant',
    subtitle: 'CITUCAR',
    description: 'My first formal job in the systems area was providing training and maintenance on computer equipment, as well as automating repetitive tasks.',
    date: '2022 - 2022',
    type: 'work',
  },
  {
    title: 'Software Development Technologist',
    subtitle: 'University foundation Tecnologico Comfenalco',
    description: 'Completed',
    date: '2022 - 2024',
    type: 'education',
  },
];

export default function TimeLine() {
  const [visible, setVisible] = useState<boolean[]>(() =>
    Array(timelineData.length).fill(false)
  );
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = itemsRef.current.findIndex((el) => el === entry.target);
          if (index === -1) return;

          setVisible((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });

          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
      }
    );

    itemsRef.current.slice(0, timelineData.length).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-4 pb-32">
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
        <div className="relative px-2 sm:px-0">
          {/* Vertical line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-gray-600 to-gray-900 transform -translate-x-1/2 hidden sm:block" />

          {/* Vertical line - Mobile */}
          <div className="absolute left-3 sm:hidden top-0 bottom-0 w-0.5 bg-linear-to-b from-gray-600 to-gray-900" />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`transform transition-all duration-700 ${
                  visible[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div
                  className={`flex flex-col sm:flex-row sm:items-center ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="w-full sm:w-1/2 pl-8 sm:pl-0 sm:px-4 lg:px-8">
                    <div className="bg-black border border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 bg-gray-800 px-2.5 py-1 rounded">
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-100 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot - Desktop */}
                  <div className="hidden sm:flex sm:w-12 sm:justify-center sm:items-center absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-5 h-5 bg-black border-2 border-gray-400 rounded-full shadow-md" />
                  </div>

                  {/* Center dot - Mobile */}
                  <div className="absolute left-0 top-5 sm:hidden">
                    <div className="w-4 h-4 bg-black border-2 border-gray-400 rounded-full shadow-md relative left-1" />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
