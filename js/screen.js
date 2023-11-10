function adjustParentHeight() {
    var divs = document.querySelectorAll('div.content');

    divs.forEach(function(div) {
      var childText = div.querySelector('p').innerHTML;
      var length = childText.split('<br>').length;
      if (length >= 2){
        div.style.height = (length * 24) + 5 + 'px';
      }
    });
  }

  // 페이지 로드 시 실행
  window.onload = function() {
    adjustParentHeight();
  };

  // 윈도우 크기가 변경될 때도 실행 (선택사항)
  window.onresize = function() {
    adjustParentHeight();
  };

  setInterval(adjustParentHeight, 500);

  