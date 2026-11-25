const fragment=(id,en,ru,text,questionAfter)=>({id:`island9-${id}`,en,ru,text,questionAfter});

const paragraphs=[
 [
  fragment('time','The opening comparison','Начальное сравнение','Visiting Mackinac (pronounced "Mackinaw") Island is like {{46|taking a step back to the past}} in time.'),
  fragment('houses','Victorian houses and the fort','Викторианские дома и форт',"Victorian {{47|houses'}} and a fort dating back to the War of 1812 surround the historic downtown, where horses and buggies still pull passengers down the road."),
 ],
 [
  fragment('arrival','Getting to the island','Как добраться до острова','The only way to get {{48|to}} Mackinac Island is by boat or private plane, and you may not bring your car.'),
  fragment('transport','The island and local transport','Описание острова и транспорт','Automobiles are outlawed on the little, {{49|isolated, Michigan, island,}} so visitors can see the sights only by horse carriage, or {{50|by riding a bicycle,}} or on foot.'),
  fragment('size','Why cars are unnecessary','Почему машины не нужны','Luckily, the island is small enough that cars are not {{51|necessary, Mackinac}} measures only a mile and a half in diameter.'),
 ],
 [
  fragment('attractions','Introducing the sights','Начало описания достопримечательностей','There are many things to see while visiting Mackinac Island.'),
  fragment('arch','Arch Rock and water erosion','Arch Rock и водная эрозия',"The majestic Grand Hotel is a popular tourist spot, as are the governor's mansion and Arch Rock, a towering limestone arch formed naturally by water erosion.",52),
  fragment('fort','Other sights','Другие достопримечательности','Fort Mackinac, where they still set off cannons every hour, is also a popular place to visit. Visible from parts of the island are Mackinac Bridge-the longest suspension bridge ever built-and a picturesque old lighthouse.'),
 ],
 [
  fragment('shopping','Shopping as a pastime','Покупки как занятие для туристов','Shopping is also a favorite pastime on Mackinac Island.'),
  fragment('tourism','Tourism and the insertion point','Туризм и место вставки',"The island's biggest industry is tourism,",53),
  fragment('sale','The most popular item','Самый популярный товар',"For the island's many tourists, the most popular item {{54|of sale}} on Mackinac Island is fudge."),
  fragment('shops','What tourists can do in the shops','Что туристы могут делать в магазинах','The downtown streets are lined with fudge shops, {{55|where}} tourists can watch fudge of all different flavors being made before lining up to buy some for themselves.'),
  fragment('nickname','The shops and the residents’ nickname','Магазины и прозвище от местных жителей','These fudge shops are so {{56|numerous and abundant}} that the local residents have even developed a special nickname for these tourists: {{57|I call}} the tourists "fudgies."'),
 ],
 [
  fragment('relax','The final paragraph’s topic','Тема последнего абзаца','Apart from sightseeing and shopping, Mackinac Island is a great place to just sit back and relax.'),
  fragment('breeze','The breeze and its result','Бриз и его результат','In the summer, a gentle lake breeze floats through the air, {{58|when it creates}} a beautiful, temperate climate.'),
  fragment('harbor','Relaxing by the harbor','Отдых у гавани','It is peaceful to sit in the city park and watch the ferries and private boats float into the harbor.'),
  fragment('privacy','Privacy and the closing contrast','Уединённость и заключительное противопоставление',"The privacy of the island's environs certainly {{59|don't give}} it the hustle-bustle quality of a city, but the relaxing atmosphere makes Mackinac Island the perfect place to visit to get away from the hectic pace of everyday life."),
 ],
];

export const passage={
 title:'Visiting Mackinac Island',
 source:'Transcribed from the supplied screenshots. The original wording and tested errors are preserved for this editing exercise. Question markers follow the supplied sequence, 46–60.',
 paragraphs,
};
export const sourceRefs=Object.fromEntries(paragraphs.flatMap((paragraph,index)=>paragraph.map(({id,en,ru})=>[
 id.replace('island9-',''),
 {id:`passage-${id}`,en:`Show in text · Paragraph ${index+1} · ${en}`,ru:`Показать в тексте · Абзац ${index+1} · ${ru}`},
])));
