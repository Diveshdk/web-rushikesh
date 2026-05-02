"use client";

import React, { useEffect, useState } from "react";
import { logoData } from "./LogoData";
import "./transition.css";

const AnimatedLogoMobile = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full max-w-2xl mx-auto flex flex-row items-center justify-center gap-2 px-4 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>

      {/* 1. Symbol (Left) - Hero Clock Reveal */}
      <div className="w-24 h-24 sm:w-36 sm:h-32 relative shrink-0">
        <svg
          viewBox="-50 0 800 696"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(0.749758, 0, 0, 0.749758, 0, 0.112132)">
            <g className={isActive ? "symbol-mask active" : ""}>
              <g className="drafting-guides">
                <circle cx="348" cy="348" r="300" fill="none" className="drafting-line" strokeDasharray="1884" strokeDashoffset="1884" />
                <line x1="48" y1="348" x2="648" y2="348" className="drafting-line" strokeDasharray="600" strokeDashoffset="600" />
                <line x1="348" y1="48" x2="348" y2="648" className="drafting-line" strokeDasharray="600" strokeDashoffset="600" />
              </g>

              {logoData.symbol.map((path, index) => (
                <path
                  key={`sym-${index}`}
                  d={path.d}
                  fill={path.fill}
                  stroke={path.stroke}
                  strokeWidth="1.2"
                  className={`logo-path ${isActive ? "symbol-path" : ""}`}
                  style={{
                    animationDelay: `${0.5 + (path.rnd * 2.0)}s`
                  } as React.CSSProperties}
                />
              ))}
            </g>
          </g>
        </svg>
      </div>

      {/* 2. Text Content (Right) - Shimmer Reveal */}
      <div className="flex-1 w-full pt-12">
        <svg
          // Increased height from 750 to 900 to fit the new text gaps
          viewBox="500 120 1875 900"
          className="w-full h-auto overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(0.749758, 0, 0, 0.749758, 0, 0.112132)">
            {/* Removed the non-functional flex classes from the SVG group */}
            <g>
              <text
                x="650"
                y="300"
                fontFamily="Arial, sans-serif"
                fontSize="220"
                fontWeight="bold"
                letterSpacing="10"
                fill="#28917B"
                className={`uppercase ${isActive ? 'shimmer-path' : 'opacity-0'}`}
                style={{ animationDelay: '3.5s', strokeDasharray: 'none', strokeDashoffset: 'none' }}
              >
                Rushikesh Sutar
              </text>

              <text
                x="650"
                y="580" // Shifted further down to increase gap
                fontFamily="Arial, sans-serif"
                fontSize="220"
                fontWeight="bold"
                letterSpacing="10"
                fill="#1A1A1A"
                className={`uppercase ${isActive ? 'shimmer-path' : 'opacity-0'}`}
                style={{ animationDelay: '4.2s', strokeDasharray: 'none', strokeDashoffset: 'none' }}
              >
                &amp; Associates
              </text>

              <text
                x="650"
                y="800" // Shifted further down to increase gap
                fontFamily="Arial, sans-serif"
                fontSize="105"
                fontWeight="bold"
                letterSpacing="60"
                fill="#333333"
                className={`uppercase ${isActive ? 'shimmer-path' : 'opacity-0'}`}
                style={{ animationDelay: '4.9s', strokeDasharray: 'none', strokeDashoffset: 'none' }}
              >
                Architects
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLogoMobile;