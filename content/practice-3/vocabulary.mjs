import { sourceRefs } from './passage.mjs';

const word = (name, meaning, id, context, contextRu, example, exampleRu) => ({
  word: name, meaning, source: sourceRefs[id], context, contextRu, example, exampleRu,
});

export const vocabularyNotebook = {
  title: 'Словарь к Give a Snake a Break',
  intro: 'Прочитай слово в исходной фразе и в новом примере. Затем попробуй объяснить его своими словами по памяти.',
  vocabulary: [
    word('reputation', 'репутация, сложившееся мнение о ком-то или чём-то', 'reputation', 'snakes have had a reputation', 'у змей сложилась репутация', 'The library has a reputation for being quiet.', 'У библиотеки репутация тихого места.'),
    word('a snake in the grass', 'человек, который выглядит безобидным и скрывает дурные намерения', 'snake-in-grass', 'a seemingly innocent person intent on causing harm', 'на вид безобидный человек, намеренный навредить', 'In the story, the spy turns out to be a snake in the grass.', 'В рассказе шпион оказывается скрытым врагом.'),
    word('shady intent', 'сомнительное или нечестное намерение', 'snake-charmer', 'uses flattery to distract you from his shady intent', 'льстит, чтобы отвлечь от своих нечестных намерений', 'The forged note revealed his shady intent.', 'Поддельная записка выдала его нечестный замысел.'),
    word('connotation', 'оттенок значения, ассоциация, которую вызывает слово', 'references', 'bears this negative connotation', 'имеет эту негативную окраску', 'The word “home” often has a warm connotation.', 'Слово home часто вызывает тёплые ассоциации.'),
    word('malign', 'очернять, говорить о ком-то плохо. Maligned — тот, кого очерняют', 'thesis', 'one of the most unjustly maligned creatures', 'одно из самых несправедливо очерняемых существ', 'The book defends an unfairly maligned artist.', 'Книга защищает художника, которого несправедливо очерняют.'),
    word('prey', 'добыча, животное, на которое охотится хищник', 'fangs-and-prey', 'to hold small prey', 'удерживать мелкую добычу', 'The owl searches for prey at night.', 'Сова ищет добычу ночью.'),
    word('provoke', 'провоцировать, вызывать ответную реакцию', 'provoked', 'if they are only provoked', 'если их всего лишь спровоцируют (исходный порядок слов)', 'The headline provoked a lively discussion.', 'Заголовок вызвал оживлённое обсуждение.'),
    word('a nuisance', 'помеха, кто-то или что-то, что доставляет неудобства', 'nuisance', 'considering them a nuisance', 'считая их помехой', 'The noise became a nuisance during exams.', 'Шум стал мешать во время экзаменов.'),
    word('be overrun with', 'быть заполонённым чем-либо', 'without-snakes', 'we would be virtually overrun with other vermin', 'нас практически заполонили бы другие вредители', 'By July, the garden was overrun with weeds.', 'К июлю сад зарос сорняками.'),
    word('stand up for', 'заступаться за кого-то, защищать кого-то или что-то', 'ending', 'stand up for our legless friends', 'заступитесь за наших безногих друзей', 'She stood up for a classmate who was being blamed unfairly.', 'Она заступилась за одноклассника, которого несправедливо обвиняли.'),
  ],
  exercises: [
    { title: 'Than или then?', en: 'This route is shorter ___ the old one. Follow it, ___ turn left.', ru: 'Вставь слова и объясни, где сравнение, а где порядок действий.', answerEn: 'This route is shorter than the old one. Follow it, then turn left.', answerRu: 'Than стоит после shorter и вводит второй маршрут. Then сообщает, что сделать после этого.' },
    { title: 'Its или it’s?', en: 'The bird spread ___ wings. ___ ready to fly.', ru: 'Заполни пропуски. Где можно сказать it is?', answerEn: 'The bird spread its wings. It’s ready to fly.', answerRu: 'Its отвечает на вопрос «чьи крылья?». It’s можно развернуть в it is: «она готова лететь».' },
    { title: 'Проверь обе стороны знака', en: 'Use a colon and a semicolon: “I packed two tools __ a brush and a ruler. The brush fits in my pocket __ the ruler goes in my bag.”', ru: 'Поставь двоеточие в одном пропуске и точку с запятой в другом. Найди основы.', answerEn: 'I packed two tools: a brush and a ruler. The brush fits in my pocket; the ruler goes in my bag.', answerRu: 'После tools идёт перечень. Перед вторым пропуском есть brush fits, после него ruler goes. Это две самостоятельные части.' },
    { title: 'Найди подлежащее', en: 'A stack of trays (can hold / can holds) the dishes. The workers (wash and dry / washing and dry) the trays.', ru: 'Выбери формы глаголов. Какое слово управляет каждым действием?', answerEn: 'A stack of trays can hold the dishes. The workers wash and dry the trays.', answerRu: 'Подлежащее первого предложения — stack. После can нужна базовая форма hold. Во втором предложении оба действия относятся к workers, поэтому wash и dry стоят параллельно.' },
    { title: 'Причина или уступка?', en: '“I’ll go for a walk (because / even if) it rains.” The speaker plans to go whether or not it rains.', ru: 'Выбери союз, при котором дождь не меняет план.', answerEn: 'I’ll go for a walk even if it rains.', answerRu: 'Even if значит «даже если»: человек пойдёт гулять в любом случае. Because означало бы, что дождь стал причиной прогулки.' },
  ],
};
