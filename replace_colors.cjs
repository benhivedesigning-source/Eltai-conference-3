const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace gradients
content = content.replace(/from-purple-600 to-pink-500/g, 'from-lime-400 to-lime-500');
content = content.replace(/from-purple-400 to-pink-400/g, 'from-lime-300 to-lime-400');
content = content.replace(/from-yellow-400 to-orange-500/g, 'from-lime-400 to-lime-500');
content = content.replace(/from-yellow-400 to-orange-400/g, 'from-lime-400 to-lime-500');
content = content.replace(/from-purple-500 to-pink-500/g, 'from-lime-400 to-lime-500');

// Replace text colors
content = content.replace(/text-purple-600/g, 'text-lime-500');
content = content.replace(/text-purple-500/g, 'text-lime-500');
content = content.replace(/text-purple-400/g, 'text-lime-400');
content = content.replace(/text-pink-500/g, 'text-lime-500');
content = content.replace(/text-pink-400/g, 'text-lime-400');
content = content.replace(/text-yellow-400/g, 'text-lime-400');
content = content.replace(/text-orange-500/g, 'text-lime-500');

// Replace bg colors
content = content.replace(/bg-purple-600/g, 'bg-lime-500');
content = content.replace(/bg-purple-500/g, 'bg-lime-500');
content = content.replace(/bg-purple-400/g, 'bg-lime-400');
content = content.replace(/bg-pink-500/g, 'bg-lime-400');
content = content.replace(/bg-yellow-400/g, 'bg-lime-400');
content = content.replace(/bg-purple-50/g, 'bg-lime-50');
content = content.replace(/bg-purple-100/g, 'bg-lime-100');
content = content.replace(/bg-purple-200/g, 'bg-lime-200');
content = content.replace(/bg-pink-200/g, 'bg-lime-200');
content = content.replace(/bg-yellow-200/g, 'bg-lime-200');

// Replace border colors
content = content.replace(/border-purple-600/g, 'border-lime-500');
content = content.replace(/border-purple-500/g, 'border-lime-500');
content = content.replace(/border-purple-200/g, 'border-lime-200');
content = content.replace(/border-purple-100/g, 'border-lime-100');
content = content.replace(/border-pink-500/g, 'border-lime-400');
content = content.replace(/border-yellow-400/g, 'border-lime-400');
content = content.replace(/border-b-yellow-400/g, 'border-b-lime-400');
content = content.replace(/border-b-pink-500/g, 'border-b-lime-400');
content = content.replace(/border-t-yellow-400/g, 'border-t-lime-400');

// Replace shadow colors
content = content.replace(/shadow-purple-500/g, 'shadow-lime-500');
content = content.replace(/shadow-purple-600/g, 'shadow-lime-500');
content = content.replace(/shadow-pink-500/g, 'shadow-lime-400');
content = content.replace(/rgba\(168,85,247/g, 'rgba(163,230,53'); // purple-500 -> lime-400 (#a3e635)
content = content.replace(/rgba\(236,72,153/g, 'rgba(163,230,53'); // pink-500 -> lime-400
content = content.replace(/rgba\(250,204,21/g, 'rgba(163,230,53'); // yellow-400 -> lime-400
content = content.replace(/rgba\(147,51,234/g, 'rgba(132,204,22'); // purple-600 -> lime-500 (#84cc16)

// Also replace from-purple-600/20 to-pink-500/20
content = content.replace(/from-purple-600\/([0-9]+)/g, 'from-lime-500/$1');
content = content.replace(/to-pink-500\/([0-9]+)/g, 'to-lime-400/$1');
content = content.replace(/from-purple-500\/([0-9]+)/g, 'from-lime-500/$1');
content = content.replace(/from-pink-500\/([0-9]+)/g, 'from-lime-400/$1');
content = content.replace(/from-yellow-400\/([0-9]+)/g, 'from-lime-400/$1');

fs.writeFileSync('src/App.tsx', content);
