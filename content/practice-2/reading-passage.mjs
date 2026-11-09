// Source line numbers remain stable even when text wraps differently on a device.
const groups=[
{from:1,lines:[
'Think about a remote control. Something so simple in func-',
'tion is seemingly capable of invisible magic to most of us. Only',
'those with an engineering and electronics background probably',
'have any real idea of why a remote control works. The rest of us',
'just assume it should. And the longer a given technology exists,',
'the more we take it for granted.']},
{from:7,lines:[
'Consider for a moment a split screen showing modern',
'remote control users versus the first remote control users: the',
'original users would be cautiously aiming the remote directly at',
'the television, reading the names of the buttons to find the right',
'one, and deliberately pressing the button with a force that adds',
'nothing to the effectiveness of the device. The modern users',
'would be reclined on a sofa, pointing the remote any which way,',
'and instinctively feeling for the button they desired, intuiting its',
'size, shape, and position on the remote.']},
{from:16,lines:[
'Humans are known for being handy with tools, so it is',
'no surprise that we get so comfortable with our technology.',
'However, as we become increasingly comfortable with how to',
'use new technologies, we become less aware of how they work.',
'Most people who use modern technology know nothing of its',
'underlying science. They have spent neither mental nor financial',
'resources on its development. And yet, rather than be humbled',
'by its ingenuity, we consumers often become unfairly demanding',
'of what our technology should do for us.']},
{from:25,lines:[
'Many of the landmark inventions of the twentieth century',
'followed predictable trajectories: initial versions of each technol-',
'ogy (television, video games, computers, portable phones, etc.)',
'succeeded in wowing the general public. Then, these wondrous',
'novelties quickly became commonplace. Soon, the focus of',
'consumer attitudes toward these inventions changed from awed',
'gratitude to discriminating preference.']},
{from:32,lines:[
'Televisions needed to be bigger and have a higher resolution.',
'Video games needed to be more realistic. Computers needed to',
'be more powerful yet smaller in size. Cell phones needed to be',
'smaller yet capable of performing other tasks such as taking',
'pictures, accessing the Internet, and even playing movies.']},
{from:37,lines:[
'For children of the last twenty years born into this modern',
'life, these technological marvels seem like elements of the peri-',
'odic table: a given ingredient that is simply part of the universe.',
'Younger generations don’t even try to conceive of life without',
'modern conveniences. They do not appreciate the unprecedented',
'technology that is in their possession; rather, they complain',
'about the ways in which it fails to live up to ideal expectations.']},
{from:44,lines:[
'“The videos that my phone can record are too pixelated.”',
'“My digital video recorder at home doesn’t allow me to program',
'it from my computer at work.” “It’s taking too long for this',
'interactive map to display my portable GPS.” “My robotic',
'vacuum cleaner never manages to get the crumbs out of the',
'cracks between the tiles.”']},
{from:50,lines:[
'If it sounds as though we’re never satisfied, we aren’t. Of',
'course, our fussy complaints do actually motivate engineers to',
'continually refine their products. After all, at the root of our tool-',
'making instinct is the notion that “there must be a better way.”',
'Thus, the shortcomings of any current version of technology are',
'pinned on the limitations of its designers, and the expectation is',
'that someone, somewhere is working on how to make the exist-',
'ing product even better.']},
{from:58,lines:[
'The most dangerous extension of this mindset is its effect',
'on our outlook on solving global climate problems. The firmly',
'substantiated problem of global warming threatens to quickly',
'render the planet Earth inhospitable to most humans.']},
{from:62,lines:[
'The solution? If you ask most people, you will hear that',
'the solution resides in creating more efficient versions of our',
'current technologies and devising alternative forms of energy',
'than those that burn fossil fuels.']},
{from:66,lines:[
'Blindly confident that the creativity of human problem-',
'solvers can wriggle us out of any dilemma, most people feel',
'guiltless in continuing to live their lives with the assumption',
'that someone else is working on these problems.']},
{from:70,lines:[
'Unfortunately, having no real scientific perspective on',
'the problems to be solved or the complexity of global weather',
'patterns, most people are unduly optimistic about humanity’s',
'ability to think its way out of this problem. In a culture com-',
'pletely spoiled by the idea that technology can achieve whatever',
'goal it is tasked to perform, the idea that a global climate crisis',
'may be beyond the reach of a clever technological solution is',
'unthinkable.']},
{from:78,lines:[
'Hence, the idea that we, as a culture, may need to reexamine',
'our lifestyles and consumer habits is too alien to take seriously.',
'In contemporary society, the leaders who are most able to com-',
'municate the state of the world do not dare suggest to the public',
'the unpopular ideas that “times will be rough,” “sacrifices must',
'be made,” or “we may have to take some steps backwards.”']},
{from:84,lines:[
'As a result, the human race will continue defiantly with the',
'status quo and, ultimately, blame technology when problems',
'arise. At that point, we’ll all be searching for the “rewind” button',
'on the remote control.']}
];
function sourceLine(raw,number,last){const broken=raw.endsWith('-');const compound=/(?:tool|problem)-$/.test(raw);return {number,text:broken&&!compound?raw.slice(0,-1):raw,joinAfter:last||broken?'':' '};}
export const readingSourceLines=groups.flatMap(g=>g.lines.map((raw,i)=>sourceLine(raw,g.from+i,i===g.lines.length-1)));
export const readingPassage={
 title:'Information Stupor-highway',
 attribution:'SOCIAL SCIENCE: This passage is adapted from the article "Information Stupor-highway" by Cal Jergenson (© 2005 by Cal Jergenson).',
 source:'Passage, questions, and answer key supplied by the user in screenshots. Paragraphs and original line references are preserved; word-break hyphens are joined for comfortable reading. This is not labelled as an official ACT paper.',
 note:'Line labels refer to the source screenshots, not to the number of lines on your screen. Evidence links highlight the referenced source line. This 2005 passage is studied for the author’s argument and language.',
 sourceLines:readingSourceLines,
 lineRanges:groups.map(g=>({from:g.from,to:g.from+g.lines.length-1})),
 paragraphs:groups.map(g=>readingSourceLines.filter(l=>l.number>=g.from&&l.number<g.from+g.lines.length).map(l=>l.text+l.joinAfter).join(''))
};
