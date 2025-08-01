import { useEffect, useRef, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;

      const positions = sections.current.map(section => {
        if (!section) return Infinity;
        const rect = section.getBoundingClientRect();
        return rect.top - containerTop;
      });

      const visibleIndex = positions.findIndex(pos => pos > 0 && pos < container.clientHeight / 2);
      if (visibleIndex !== -1) {
        setActiveIndex(visibleIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const labels = [
    'ملخص القضية',
    'الحضور',
    'محاور الجلسة',
    'القرارات المتخذة',
    'تم اعتماد المحضر من',
    'القرارات المتخذة',
    'تم اعتماد المحضر من',
    'محاور الجلسة',
    'القرارات المتخذة',
    'تم اعتماد المحضر من',
    'القرارات المتخذة',
    'تم اعتماد المحضر من'
  ];

  return (
    <div className="container h-full">
      <div className="scroll-indicator">
        {labels.map((label, i) => (
          <div
            key={i}
            className={`notch ${i === activeIndex ? 'active' : ''}`}
          />
        ))}
        <div className="line" />
      </div>
      <div className="content flex flex-col gap-2 scrollbar-none" ref={containerRef} style={{ height: '150px', overflowY: 'auto' }}>
        {labels.map((label, i) => (
          <div
            key={i}
            className="section "
            ref={(el: HTMLDivElement | null) => {
              sections.current[i] = el;
            }}          >
            <span className='text-aeblack-800'>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;