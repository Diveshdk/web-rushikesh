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
    <div className={`w-full max-w-5xl mx-auto py-12 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="logo-container">
        <svg
          viewBox="0 0 2327.25 696"
          className="w-full h-auto pencil-filter"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pencil Texture Filter Definition */}
          <defs>
            <filter id="pencil-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            </filter>
          </defs>

          <g transform="matrix(0.749758, 0, 0, 0.749758, 0, 0.112132)">
            {/* Symbol Group: Symbol + Guides (Slides to left at 3s) */}
            <g className={`symbol-group ${isActive ? "active" : ""}`}>
              {/* 1. Drafting Guide (0-1.5s) */}
              <g className="drafting-guides">
                {/* Circle divided into 4 parts */}
                <circle cx="411" cy="348" r="300" fill="none" className="drafting-line" strokeDasharray="1884" strokeDashoffset="1884" />
                <line x1="111" y1="348" x2="711" y2="348" className="drafting-line" strokeDasharray="600" strokeDashoffset="600" />
                <line x1="411" y1="48" x2="411" y2="648" className="drafting-line" strokeDasharray="600" strokeDashoffset="600" />
              </g>

              {/* symbol (0-3s) with 360-degree clock mask */}
              <g className={isActive ? "symbol-mask" : ""}>
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

            {/* 2. Main Logo Rest (3s-6s) - Random Shimmer Reveal */}
            <g>
              {/* main text (3-5s) */}
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

              {/* tagline (5-6s) */}
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

export default AnimatedLogo;
