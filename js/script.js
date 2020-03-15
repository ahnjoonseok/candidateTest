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




