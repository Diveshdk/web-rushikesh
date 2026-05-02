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
    <div className={`w-full max-w-3xl mx-auto py-8 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="logo-container">
        <svg
          viewBox="0 0 2327.25 696"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
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

            {/* 2. Main Logo Rest (3s-6s) - Text Reveal */}
            <g>
              <text
                x="950"
                y="320"
                fontFamily="Arial, sans-serif"
                fontSize="170"
                fontWeight="bold"
                letterSpacing="10"
                fill="#28917B"
                className={`uppercase ${isActive ? 'shimmer-path' : 'opacity-0'}`}
                style={{ animationDelay: '3.5s', strokeDasharray: 'none', strokeDashoffset: 'none' }}
              >
                Rushikesh Sutar
              </text>
              <text
                x="950"
                y="490"
                fontFamily="Arial, sans-serif"
                fontSize="170"
                fontWeight="bold"
                letterSpacing="10"
                fill="#1A1A1A"
                className={`uppercase ${isActive ? 'shimmer-path' : 'opacity-0'}`}
                style={{ animationDelay: '4.2s', strokeDasharray: 'none', strokeDashoffset: 'none' }}
              >
                &amp; Associates
              </text>
              <text
                x="950"
                y="620"
                fontFamily="Arial, sans-serif"
                fontSize="85"
                fontWeight="bold"
                letterSpacing="75"
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

export default AnimatedLogo;