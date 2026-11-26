const fragment=(id,en,ru,text,questionAfter)=>({id:`karaoke10-${id}`,en,ru,text,questionAfter});

const paragraphs=[
 [
  fragment('s1','Sentence 1 · general popularity','Предложение 1 · общая популярность','[1] Karaoke is one of the most popular forms of entertainment in the world.'),
  fragment('s2','Sentence 2 · the question about public singing','Предложение 2 · вопрос о пении на публике','[2] What defies understanding, though, is why so many ordinary people insist on getting up on stage in public, humiliating themselves in front of both their {{61|friends; and peers.}}'),
  fragment('s3','Sentence 3 · enjoyment in several settings','Предложение 3 · удовольствие в разных условиях','[3] Whether practiced at home, in a restaurant, or at a party, karaoke is a form of entertainment {{62|that provides}} people with a great time and a positive feeling.'),
  fragment('s4','Sentence 4 · understandable private enjoyment','Предложение 4 · понятное удовольствие дома','[4] It is understandable that people would enjoy singing in the privacy of their homes.'),
  fragment('s5','Sentence 5 · answers to the question','Предложение 5 · ответы на поставленный вопрос','[5] There are many different ways to respond to this question.',63),
 ],
 [
  fragment('look','Looking more closely','Предложение с призывом присмотреться',"{{64|Looking}} more closely, and you'll see a main reason for karaoke's success is its glitz and glamour."),
  fragment('stars','Everyday people become stars','Обычные люди чувствуют себя звёздами','Karaoke provides people with a moment when they are more than just everyday folks-they are stars.'),
  fragment('concert','A concert-like performance','Выступление как на настоящем концерте','Even though their performances may be heard only in dimly lit bars or busy {{65|restaurants, but}} karaoke singers are still performing as if in a true concert with such concert-hall {{66|staples,}} as microphones, lights, and applause.'),
  fragment('audience','The audience knows it is for fun','Публика понимает, что это развлечение',"Even though the singers' voices are not spectacular, the audience {{67|has known}} that it's all for fun and responds anyway."),
  fragment('rockstar','Wanting to be a star','Желание быть звездой','And in the end, everyone would like to be a rock star.'),
  fragment('bridge','The conclusion and transition','Вывод и переход к следующей причине','{{68|Karaoke is as close as many people will get to fame and stardom, but this is not the only reason for its enduring popularity.}}'),
 ],
 [
  fragment('another','Another reason for public singing','Ещё одна причина популярности','There is another, more obvious reason why karaoke is so popular and singing in public is so much fun.'),
  fragment('private','Singing alone','Пение в одиночестве','The average person allows his or her singing to be heard only in the shower or in the car as the radio plays.'),
  fragment('contrast','Sharing a solitary activity','Совместное переживание вместо одиночного','Karaoke, {{69|by contrast,}} allows the average person the opportunity to share that ordinarily solitary experience with other people.'),
  fragment('regardless','Enjoyment independent of vocal ability','Удовольствие независимо от качества голоса','{{70|In lieu of}} how good or bad their voices are, people can experience the sheer joy of music with others, {{71|whose}} singing is mostly a private affair as well, through karaoke.'),
 ],
 [
  fragment('shy','The qualifying detail about shy people','Уточнение о застенчивых людях','The effect karaoke has on people may also provide an explanation for its popularity: it helps bring people who are ordinarily shy out of their shells.',72),
  fragment('confidence','The stated psychological benefits','Названные эффекты для уверенности','Karaoke helps them overcome stage fright, build their self-confidence, and conquer their fears.'),
  fragment('timing','Taking the stage and receiving applause','Выход на сцену и последующие аплодисменты','The singers may feel nervous or silly {{73|if}} they first take the stage, but when the audience breaks out into applause, the singers are sure to feel rewarded.'),
 ],
 [
  fragment('lasting','The final paragraph’s main point','Главная мысль заключительного абзаца','Whatever the reason, karaoke continues to grow in popularity.'),
  fragment('money','A large amount of money','Большая денежная сумма','Last year, karaoke made no {{74|less than}} $7 billion in profit in Japan.'),
  fragment('fad','A fad or lasting enjoyment','Мимолётная мода или устойчивое удовольствие','Many dismiss it as a fad, but as long as karaoke is fun and leaves people feeling good, it will not disappear.'),
 ],
];

export const passage={title:'Fun with Karaoke',source:'Transcribed from the supplied screenshots. Tested errors and the original sentence order are intentionally preserved. Paragraphs are numbered 1–5; bracketed sentence numbers in Paragraph 1 are retained for Question 63.',paragraphs};
export const sourceRefs=Object.fromEntries(paragraphs.flatMap((paragraph,index)=>paragraph.map(({id,en,ru})=>[
 id.replace('karaoke10-',''),
 {id:`passage-${id}`,en:`Show in text · Paragraph ${index+1} · ${en}`,ru:`Показать в тексте · Абзац ${index+1} · ${ru}`},
])));
