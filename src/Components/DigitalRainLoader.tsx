import React, { useState, useEffect } from "react";
import { Terminal, Code, Zap } from "lucide-react";
import "./DigitalRainLoader.css";

// Dynamically set styles for custom-matrix-rain-column
useEffect(() => {
  const columns = document.querySelectorAll(".custom-matrix-rain-column");
  columns.forEach((col) => {
    const left = col.getAttribute("data-left");
    const delay = col.getAttribute("data-delay");
    const duration = col.getAttribute("data-duration");
    if (left) (col as HTMLElement).style.left = `${left}%`;
    if (delay) (col as HTMLElement).style.animationDelay = `${delay}s`;
    if (duration) (col as HTMLElement).style.animationDuration = `${duration}s`;
  });
}, []);

function generateMatrixChar(): React.ReactNode {
  // Use a mix of Katakana, numbers, and symbols for matrix effect
  const chars = [
    "ｱ",
    "ｲ",
    "ｳ",
    "ｴ",
    "ｵ",
    "ｶ",
    "ｷ",
    "ｸ",
    "ｹ",
    "ｺ",
    "ｻ",
    "ｼ",
    "ｽ",
    "ｾ",
    "ｿ",
    "ﾀ",
    "ﾁ",
    "ﾂ",
    "ﾃ",
    "ﾄ",
    "ﾅ",
    "ﾆ",
    "ﾇ",
    "ﾈ",
    "ﾉ",
    "ﾊ",
    "ﾋ",
    "ﾌ",
    "ﾍ",
    "ﾎ",
    "ﾏ",
    "ﾐ",
    "ﾑ",
    "ﾒ",
    "ﾓ",
    "ﾔ",
    "ﾕ",
    "ﾖ",
    "ﾗ",
    "ﾘ",
    "ﾙ",
    "ﾚ",
    "ﾛ",
    "ﾜ",
    "ﾝ",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "@",
    "#",
    "$",
    "%",
    "&",
  ];
  return chars[Math.floor(Math.random() * chars.length)];
}
