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
    <div className={`w-full max-w-xs mx-auto flex flex-col items-center gap-6 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      {/* 1. Symbol (Top) - Hero Clock Reveal */}
      <div className="w-36 h-32 relative">
        <svg
          viewBox="-50 0 800 696"
          className="w-full h-full pencil-filter overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="pencil-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            </filter>
          </defs>

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

      {/* 2. Text Content (Bottom) - Shimmer Reveal */}
      <div className="w-full px-4">
        <svg
          viewBox="500 120 1875 580"
          className="w-full h-auto pencil-filter overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(0.749758, 0, 0, 0.749758, 0, 0.112132)">
            <g>
              {logoData.mainText.map((path, index) => (
                <path
                  key={`text-${index}`}
                  d={path.d}
                  fill={path.fill}
                  stroke={path.stroke}
                  strokeWidth="1.2"
                  className={`logo-path ${isActive ? "shimmer-path" : ""}`}
                  style={{ 
                    animationDelay: `${3.0 + (path.rnd * 2.0)}s`
                  } as React.CSSProperties}
                />
              ))}

              {logoData.tagline.map((path, index) => (
                <path
                  key={`tag-${index}`}
                  d={path.d}
                  fill={path.fill}
                  stroke={path.stroke}
                  strokeWidth="0.8"
                  className={`logo-path ${isActive ? "shimmer-path" : ""}`}
                  style={{ 
                    animationDelay: `${5.0 + (path.rnd * 1.0)}s`
                  } as React.CSSProperties}
                />
              ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLogoMobile;
