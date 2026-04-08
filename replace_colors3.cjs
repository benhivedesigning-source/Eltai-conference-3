const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace specific hex
content = content.replace(/#a3e635/g, '#c4f042'); 

// Replace rgba shadow colors (163,230,53 is #a3e635, 196,240,66 is #c4f042)
content = content.replace(/rgba\(163,230,53/g, 'rgba(196,240,66'); 
content = content.replace(/rgba\(132,204,22/g, 'rgba(196,240,66'); 

// Replace tailwind classes with arbitrary values
// lime-400 -> [#c4f042]
// lime-500 -> [#b0d83b] (slightly darker for gradients)
// lime-300 -> [#d8f471] (slightly lighter)

// Text
content = content.replace(/text-lime-500/g, 'text-[#b0d83b]');
content = content.replace(/text-lime-400/g, 'text-[#c4f042]');
content = content.replace(/text-lime-300/g, 'text-[#d8f471]');

// Background
content = content.replace(/bg-lime-500/g, 'bg-[#b0d83b]');
content = content.replace(/bg-lime-400/g, 'bg-[#c4f042]');
content = content.replace(/bg-lime-300/g, 'bg-[#d8f471]');
content = content.replace(/bg-lime-50/g, 'bg-[#c4f042]/10');
content = content.replace(/bg-lime-100/g, 'bg-[#c4f042]/20');
content = content.replace(/bg-lime-200/g, 'bg-[#c4f042]/30');

// Border
content = content.replace(/border-lime-500/g, 'border-[#b0d83b]');
content = content.replace(/border-lime-400/g, 'border-[#c4f042]');
content = content.replace(/border-lime-200/g, 'border-[#c4f042]/30');
content = content.replace(/border-lime-100/g, 'border-[#c4f042]/20');
content = content.replace(/border-b-lime-400/g, 'border-b-[#c4f042]');
content = content.replace(/border-t-lime-400/g, 'border-t-[#c4f042]');

// Gradients
content = content.replace(/from-lime-500/g, 'from-[#b0d83b]');
content = content.replace(/from-lime-400/g, 'from-[#c4f042]');
content = content.replace(/from-lime-300/g, 'from-[#d8f471]');
content = content.replace(/to-lime-600/g, 'to-[#9bc234]');
content = content.replace(/to-lime-500/g, 'to-[#b0d83b]');
content = content.replace(/to-lime-400/g, 'to-[#c4f042]');
content = content.replace(/via-lime-600/g, 'via-[#9bc234]');
content = content.replace(/via-lime-500/g, 'via-[#b0d83b]');
content = content.replace(/via-lime-400/g, 'via-[#c4f042]');

// Shadows
content = content.replace(/shadow-lime-500/g, 'shadow-[#b0d83b]');
content = content.replace(/shadow-lime-400/g, 'shadow-[#c4f042]');

// Selection
content = content.replace(/selection:bg-lime-500/g, 'selection:bg-[#b0d83b]');

fs.writeFileSync('src/App.tsx', content);
