import React, { useEffect, useState, useRef } from 'react';
import "./BestService.css";
import { Architect, Architectural, bestserviceimg, Landscape } from '../../utils/images';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const BestService = () => {
  const text = 'Service';
  const letters = text.split('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const lastScrollTop = useRef(0);
  const isThrottled = useRef(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!inView || isThrottled.current) return;

      const st = window.scrollY || document.documentElement.scrollTop;
      const direction = st > lastScrollTop.current ? 'down' : 'up';

      setActiveIndex((prev) => {
        if (direction === 'down') return (prev + 1) % letters.length;
        if (direction === 'up') return (prev - 1 + letters.length) % letters.length;
        return prev;
      });

      lastScrollTop.current = st <= 0 ? 0 : st;

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 150); // Adjust speed as needed
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, letters.length]);

  const services = [
    {
      title: 'Architectural Design',
      description: `Are you looking for information on architectural design, or do you have a specific project or idea in mind that you'd like to explore? I can help with anything from design concepts to trends and tools.`,
      icon: Architectural,
    },
    {
      title: 'Landscape Design',
      description: `Are you looking for information on architectural design, or do you have a specific project or idea in mind that you'd like to explore? I can help with anything from design concepts to trends and tools.`,
      icon: Landscape,
    },
    {
      title: '3D Architect Design',
      description: `Are you looking for information on architectural design, or do you have a specific project or idea in mind that you'd like to explore? I can help with anything from design concepts to trends and tools.`,
      icon: Architect,
    },
  ];

  return (
    <div className='best-service'>
      <div className='best-service-main'>
        <div className='best-service-text'>
          <div className='best-service-button'>
            <a href='/' className='best-service-btn'>Best Service</a>
          </div>

          <div className='best-service-trend' ref={ref}>
            <motion.h2
              className='best-service-text'
              initial={{ opacity: 0, y: -80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Building for Tomorrow Trends in Contemporary Architecture
            </motion.h2>
          </div>
        </div>

        <div className='best-service-main-div'>
          <div className='bestservice-img-div'>
            <div className='best-service-image'>
              <img
                src={bestserviceimg}
                alt="bestservice img"
                className="best-img-service"
                initial={{ scale: 0.5, y: -100, opacity: 0 }}
                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className='best-serviceaenimation-main-div'>
              <div className='best-serviceaenimation-inner-div'>
                <div className='service-best-aenimation'>
                  <div className="glow-text">
                    {letters.map((letter, i) => {
                      let className = 'glow-letter';

                      if (i === activeIndex) {
                        className += ' active';
                      } else if (
                        (activeIndex - i + letters.length) % letters.length <= 4 &&
                        (activeIndex - i + letters.length) % letters.length > 0
                      ) {
                        const distance = (activeIndex - i + letters.length) % letters.length;
                        className += ` faded faded-${distance}`;
                      }

                      return (
                        <span key={i} className={className}>
                          {letter}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className='outlined-main-div'>
                <div class="outlined-text">Service</div>
              </div>

              <div className="design-container">
                {services.map((service, index) => (
                  <div className="design-card" key={index}>
                    <div className="icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="text-content">
                      <h2>{service.title}</h2>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestService;
