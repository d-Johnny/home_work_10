function answer() {
  var ar = [
    "Совершенно точно",
    "Определенно",
    "Несомненно",
    "Да",
    "Можно на это смело рассчитывать",
    "Как мне кажется, да",
    "Скорее всего",
    "Прогноз положительный",
    "По всем признакам - да",
    "Ответ как-то мутно выглядит, попробуй еще",
    "Попробуй позже",
    "Тебе сейчас лучше об этом не знать",
    "Невозможно сейчас сказать что-то определенное",
    "Сосредоточься и спроси меня опять",
    "Я бы не стала на это рассчитывать",
    "Мой ответ - нет",
    "Мои источники все отрицают",
    "Прогноз выглядит неутешительно",
    "Сомнительно",
    "Не мучай меня своими скучными вопросами, пожалуйста"
  ];
  var ar_length = ar.length;
  console.log (ar_length);
  var number = Math.random();
  console.log (number);
  var sum = (ar_length*number);
  console.log (666, sum);
  var myInt = Math.floor(sum);
  console.log (myInt + ' целое число');
  var myAnswer = ar[myInt];
  console.log(myAnswer);

 }

 answer();

// for (var i = 0; i < ar_length; i++) {
//   console.log(i, ar[i]);
// }

// var rand_number = Math.random();
// console.log("rand_number", rand_number);

// var round = Math.round(3.2);
// console.log("round", round);
