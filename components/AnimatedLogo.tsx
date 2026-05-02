"use client";

import React, { useEffect, useState } from "react";
import { logoData } from "./LogoData";
import "./transition.css";

const AnimatedLogo = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full max-w-5xl mx-auto py-8 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="logo-container">
        <svg
          viewBox="0 0 2327.25 696"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <g transform="matrix(0.749758, 0, 0, 0.749758, 0, 0.112132)">
            {/* Symbol Group: Symbol + Guides */}
            <g className={`symbol-group ${isActive ? "active" : ""}`}>
              {/* 1. Drafting Guide */}
              <g className="drafting-guides">
                <circle cx="411" cy="348" r="300" fill="none" className="drafting-line" strokeDasharray="1884" strokeDashoffset="1884" />
                <line x1="111" y1="348" x2="711" y2="348" className="drafting-line" strokeDasharray="600" strokeDashoffset="600" />
                <line x1="411" y1="48" x2="411" y2="648" className="drafting-line" strokeDasharray="600" strokeDashoffset="600" />
              </g>

              {/* symbol with 360-degree clock mask */}
              <g className={isActive ? "symbol-mask" : ""}>
                {logoData.symbol.map((path, index) => (
                  <path
                    key={`sym-${index}`}
                    d={path.d}
                    fill={path.fill}
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className={`logo-path ${isActive ? "symbol-path" : ""}`}
                    style={{ 
                      animationDelay: `${0.5 + (path.rnd * 1.5)}s`
                    } as React.CSSProperties}
                  />
                ))}
              </g>
            </g>

            {/* 2. Main Logo Rest - Reveal */}
            <g>
              {/* main text */}
              {logoData.mainText.map((path, index) => (
                <path
                  key={`text-${index}`}
                  d={path.d}
                  fill={path.fill}
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className={`logo-path ${isActive ? "shimmer-path" : ""}`}
                  style={{ 
                    animationDelay: `${2.5 + (path.rnd * 1.5)}s`
                  } as React.CSSProperties}
                />
              ))}

              {/* tagline */}
              {logoData.tagline.map((path, index) => (
                <path
                  key={`tag-${index}`}
                  d={path.d}
                  fill={path.fill}
                  stroke="#000000"
                  strokeWidth="1.0"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className={`logo-path ${isActive ? "shimmer-path" : ""}`}
                  style={{ 
                    animationDelay: `${4.5 + (path.rnd * 1.0)}s`
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

export default AnimatedLogo;
