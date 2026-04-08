const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace remaining hover gradients
content = content.replace(/group-hover:from-purple-600 group-hover:to-pink-500/g, 'group-hover:from-lime-400 group-hover:to-lime-500');
content = content.replace(/group-hover:from-purple-400 group-hover:to-pink-400/g, 'group-hover:from-lime-300 group-hover:to-lime-400');
content = content.replace(/hover:from-purple-600 hover:to-pink-500/g, 'hover:from-lime-400 hover:to-lime-500');
content = content.replace(/group-hover:from-yellow-400 group-hover:to-orange-400/g, 'group-hover:from-lime-400 group-hover:to-lime-500');

// Fix specific missed gradients
content = content.replace(/from-lime-500\/20 via-pink-500\/20/g, 'from-lime-500/20 via-lime-400/20');
content = content.replace(/from-purple-900\/90 via-pink-600\/50/g, 'from-lime-900/90 via-lime-600/50');
content = content.replace(/from-pink-500 to-rose-400/g, 'from-lime-400 to-lime-500');
content = content.replace(/from-purple-600 to-indigo-500/g, 'from-lime-500 to-lime-600');
content = content.replace(/to-purple-600\/5/g, 'to-lime-500/5');

fs.writeFileSync('src/App.tsx', content);
