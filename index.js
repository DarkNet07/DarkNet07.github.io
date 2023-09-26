const avatars = document.querySelector(".avatars");
const conversationElements = document.querySelector(".conversation");
const botContainer = document.querySelector(".botCont");
const userContainer = document.querySelector(".userCont");
const inputText = document.querySelector("#inputMsg");
const sendBtn = document.querySelector(".btn");
const avatarPic = document.querySelectorAll(".avatar");
const displayBox = document.querySelector(".displayBox");
const diplayAvatarBox = document.querySelector(".avatarBox");
const pinnedMessage = document.querySelector(".pinnedMessage");
const inputArea = document.querySelector(".inputArea");

const today = new Date();
let now = today.toLocaleTimeString();

const arrayMethods = {
  "concat()":
    "Объединяет два или более массивов и возвращает копию объединенных массивов",
  "copyWithin()":
    "Копирует элементы массива внутри массива в указанные позиции и обратно",
  "entries()": "Возвращает объект итерации массива пары ключ/значение",
  "every()": "Проверяет, проходит ли каждый элемент в массиве тест",
  "fill()": "Заполните элементы в массиве статическим значением",
  "filter()":
    "Создает новый массив с каждым элементом массива, прошедшим проверку",
  "find()": "Возвращает значение первого элемента массива, прошедшего проверку",
  "findIndex()":
    "Возвращает индекс первого элемента в массиве, прошедшего проверку",
  "forEach()": "Вызывает функцию для каждого элемента массива",
  "from()": "Создает массив из объекта",
  "includes()": "Проверить, содержит ли массив указанный элемент",
  "indexOf()": "Поиск элемента в массиве и возврат его позиции",
  "isArray()": "Проверяет, является ли объект массивом",
  "join()": "Объединяет все элементы массива в строку",
  "keys()":
    "Возвращает объект итерации массива, содержащий ключи исходного массива",
  "lastIndexOf()":
    "Ищет в массиве элемент, начиная с конца, и возвращает его позицию",
  "map()":
    "Создает новый массив с результатом вызова функции для каждого элемента массива",
  "pop()": "Удаляет последний элемент массива и возвращает этот элемент",
  "push()": "Добавляет новые элементы в конец массива и возвращает новую длину",
  "reduce()": "Уменьшить значения массива до одного значения (слева направо)",
  "reduceRight()":
    "Уменьшить значения массива до одного значения (справа налево",
  "reverse()": "Меняет порядок элементов в массиве на обратный",
  "shift()": "Удаляет первый элемент массива и возвращает этот элемент",
  "slice()": "Выбирает часть массива и возвращает новый массив",
  "some()": "Проверяет, прошел ли какой-либо из элементов в массиве тест",
  "sort()": "Сортирует элементы массива",
  "splice()": "Добавляет/удаляет элементы из массива",
  "toString()": "Преобразует массив в строку и возвращает результат",
  "unshift()":
    "Добавляет новые элементы в начало массива и возвращает новую длину",
  "valueOf()": "Возвращает примитивное значение массива",
  помощь:
    "concat(), copyWithin(), entries(), every(), fill(), filter(), find(), findIndex(), forEach(), from(), includes(), indexOf(), isArray(), join(), keys(), lastIndexOf(), map(), pop(), push(), reduce(), reduceRight(), reverse(), shift(), slice(), some(), sort(), splice(), toString(), unshift(), valueOf()",
};

function getAnswer(query) {
  const answer = String(arrayMethods[query]);
  return answer;
}
inputArea.style.display = "none";
conversationElements.style.display = "none";
const pinnedText =
  "Данный Бот может Вам помочь изучить все методы применяемые к массивам в JavaScript. Для этого Вам необходимо всего лишь спросить меня написав сам метод. Например: map() или напишите слово 'помощь' чтобы узнать все доступные методы.";
const badQuery =
  "Упс! Я про такой метод не знаю пока что или такого метода не существует! Можете набрать 'помощь' чтобы узнать все доступные методы для массива.";
let imgSrc = "";
console.log(avatarPic);
avatarPic.forEach((pic) => {
  pic.addEventListener("click", (event) => {
    imgSrc = event.target.src;
    diplayAvatarBox.style.display = "none";
    conversationElements.style.display = "inline";
    inputArea.style.display = "inline";
    let i = 0;
    function typeWriter() {
      if (pinnedText.length > i) {
        pinnedMessage.innerHTML += pinnedText.charAt(i);
        i += 1;
        setTimeout(typeWriter, 60);
      }
    }
    typeWriter();
  });
});

function makeAnswer() {
  const botDiv = document.createElement("div");
  botDiv.className = "container botCont";
  const userDiv = document.createElement("div");
  userDiv.className = "container userCont";
  const currentTimeBot = document.createElement("span");
  const currentTimeUser = document.createElement("span");
  currentTimeBot.className = "time-right";
  currentTimeUser.className = "time-left";
  currentTimeBot.innerHTML = `${now}`;
  currentTimeUser.innerHTML = `${now}`;
  const botImg = document.createElement("img");
  const userImg = document.createElement("img");
  botImg.className = "botImg";
  userImg.className = "right userImg";
  botImg.src = "./img/chatBot.png";
  userImg.src = `${imgSrc}`;
  botImg.alt = "User Avatar";
  const botText = document.createElement("p");
  const userText = document.createElement("p");
  userText.innerHTML = inputText.value;
  const answer = getAnswer(inputText.value);
  let i = 0;
  function typeWriter() {
    if (answer.length > i) {
      botText.innerHTML += answer.charAt(i);
      i += 1;
      setTimeout(typeWriter, 60);
    } else if (answer == "undefined") {
      botText.innerHTML = `${badQuery}`;
    }
  }
  typeWriter();
  botDiv.append(botImg, botText, currentTimeBot);
  userDiv.append(userImg, userText, currentTimeUser);
  displayBox.append(userDiv, botDiv);
  inputText.value = "";
}

inputText.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && inputText.value.length > 0) {
    makeAnswer();
    if (makeAnswer === undefined) {
      alert(badQuery);
    }
  }
});

sendBtn.addEventListener("click", () => {
  if (inputText.value.length > 0) {
    makeAnswer();
    if (makeAnswer === undefined) {
      alert(badQuery);
    }
  }
});
