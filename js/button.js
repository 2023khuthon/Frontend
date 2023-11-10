const button = document.getElementsByTagName('button');
const box = document.getElementsByClassName('boxContainer');
const url = 'http://172.21.119.171:8888/text';
var isStop = true;

button[0].addEventListener('click', function(){
    this.classList.toggle('start');
    this.classList.toggle("stop");
    box[0].classList.toggle('hidden');

    if (this.classList.contains('stop')) {
        this.textContent = 'STOP';
        isStop = false;
        var interval = setInterval(function() {
            if (!isStop){
            fetch(url)
              .then(response => {
                if (response.ok){
                    return response.text();
                } else{
                    throw new Error('Network error');
                  }
                })
              .then(data => {
                // 받은 데이터를 HTML의 특정 요소에 표시
                // document.getElementById('result').innerHTML = data;
                // console.log(data);
                // dataSum += data;
                // if (dataSum.length > 50){
                    let datalist = data.split(' ');
                    console.log(datalist);
                    for (let i = 0; i < datalist.length; i++){
                        if (i % 20 == 19){
                            datalist[i] = datalist[i] + "<br>";
                        }
                    }
            
                    let result = datalist.join();
                    // console.log(result);
                    let replaced_result = result.replaceAll(',', ' ');
                    // console.log(result);
                    if (replaced_result.length > 0){
                        let main = document.querySelector('main');
                        let maindiv = document.querySelectorAll('main > div');
                        console.log(maindiv.length);
                        if (maindiv.length != 0 && maindiv[(maindiv.length) - 1].innerText.length < 30){
                            maindiv[(maindiv.length) - 1].innerText += (" " + replaced_result);
                        }
                        else{
                            main.innerHTML += "<div class = \"content\"><p>" + replaced_result + "</p></div>";
                        }
                    }
        
              })
              .catch(error => console.error('Error:', error));
            }
        
            else{
                console.log("Stopped");
                clearInterval(interval);
            }
        }, 1000);
    } else {
        this.textContent = 'START';
        isStop = true;
    }
});

// button[0].addEventListener('click', function(){
//     if (this.classList.contains('start')) {
//         this.textContent = 'START';
//         clearInterval();
//     } else {
//         this.textContent = 'STOP';
//         setInterval(fetchData, 1000);
//     }
// });

// fetchData();

// setInterval(fetchData, 1000);