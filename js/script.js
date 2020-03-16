$(document).ready(function(){

  //Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create','UA-53828044-1','auto');
    ga('require', 'displayfeatures');
    ga('send','pageview'); 
  
  // SNS LINK
  function sharefb(url) {
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
  };

  function sharetwit(url, text) {
    window.open('http://twitter.com/intent/tweet?text=' + text + '&url=' + url);
  };

  $('#facebook').on("click", function() {
    sharefb('http://mabu.newscloud.sbs.co.kr/202002corona2/');
  });

  $('#twitter').on("click", function() {
    sharetwit('http://mabu.newscloud.sbs.co.kr/202002corona2/', 'SBS마부작침: ');
  });
});

Kakao.init('3304e8a619f256f70fd0c71f5cc846a7');
function sendLink() {
  Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '신종 코로나 바이러스 타임라인, 한눈에 보기',
        description: '마부작침은 한국의 신종 코로나 감염 상황과 감염자 동선을 날짜별로 알기 쉽게 정리했습니다.',
        imageUrl: 'https://img.sbs.co.kr/newimg/news/20200205/201399454.jpg',
        link: {
          mobileWebUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html',
          webUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html'
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html',
            webUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html'
          }
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html',
            webUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html'
          }
        }
      ]
  });
}

const startButton = document.getElementById('start-btn')
const titleContainer = document.getElementById('title-container')

const questionContainer = document.getElementById('quesiton-container')
const questionElement = document.getElementById('question')
const questionImage = document.getElementById('question-img')
const answerButtonsElement = document.getElementById('answer-buttons')

const resultContainer = document.getElementById('result-container')


let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)



function startGame() {
  titleContainer.classList.add('hide');
  questionContainer.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion();
}

function setNextQuestion() {
  resetState() 
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function showQuestion(question) {
  questionElement.innerText = question.quesiton
  questionImage.src = question.image

  question.answer.forEach(answer => {

    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('quesiton-btn')
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)

  })
}

function selectAnswer() {
  currentQuestionIndex++
  if(currentQuestionIndex > 5){
    result()
    return
  }
  setNextQuestion();
}

function result() {
  questionContainer.classList.add('hide')
  resultContainer.classList.remove('hide')


}


const questions = [
  {
    quesiton: '국회의원의 나이는',
    image: './img/man3.png',
    answer: [
      { text: '젊은 국회의원이 좋다', value: 3 },
      { text: '연륜이 있어야한다.', value: 0 }
    ]
  },
  {
    quesiton: '여성국회의원은',
    image: './img/man2.png',
    answer: [
      { text: '많아져야한다', value: 3 },
      { text: '지금이 딱 좋다', value: 0 },
      { text: '더 없어져야한다', value: 0 }
    ]
  },
  {
    quesiton: '게임을 좋아하는 국회의원',
    image: './img/man1.png',
    answer: [
      { text: '필요하다', value: 3 },
      { text: '게임같은 소리하네', value: 0 }
    ]
  },
  {
    quesiton: '국회의원의 나이는2',
    image: './img/man2.png',
    answer: [
      { text: '젊은 국회의원이 좋다', value: 3 },
      { text: '연륜이 있어야한다.', value: 0 }
    ]
  },
  {
    quesiton: '여성국회의원은2',
    image: './img/man4.png',
    answer: [
      { text: '많아져야한다', value: 3 },
      { text: '지금이 딱 좋다', value: 0 },
      { text: '더 없어져야한다', value: 0 }
    ]
  },
  {
    quesiton: '게임을 좋아하는 국회의원2',
    image: './img/man4.png',
    answer: [
      { text: '필요하다', value: 3 },
      { text: '게임같은 소리하네', value: 0 }
    ]
  }
]