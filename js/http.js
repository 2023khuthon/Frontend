import button from './toggle.js';
const url = 'http://172.21.119.171:8888/text';
const button = document.getElementsByTagName('button');
button[0].addEventListener('click', fetchData);

function fetchData(){
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
        let datalist = data.split(' ');
        console.log(datalist);
        for (let i = 0; i< datalist.length; i++){
            if (i % 10 == 9){
                datalist[i] = datalist[i] + "<br>";
            }
        }

        let result = datalist.join();
        // console.log(result);
        let replaced_result = result.replaceAll(',', ' ');
        // console.log(result);
        if (replaced_result.length > 0){
            let main = document.querySelector('main');
            main.innerHTML += "<div class = \"content\"><p>" + replaced_result + "</p></div>";
        }

      })
      .catch(error => console.error('Error:', error));
}

fetchData();

setInterval(fetchData, 1000);