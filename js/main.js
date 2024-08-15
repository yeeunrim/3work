// 슬라이드
$(document).ready(function() {
  // 초기 설정
  var currentSlide = 3; // 시작 슬라이드 번호
  var totalSlides = 3; // 전체 슬라이드 개수

	// 모든 슬라이드를 숨김
  $(".slide").hide();
  
  // 슬라이드가 전환되는 함수
  function nextSlide() {
    // 현재 슬라이드 숨김
    $("#slide" + currentSlide).hide();

    // 다음 슬라이드로 이동
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1; // 마지막 슬라이드 이후 첫 번째 슬라이드로 이동
    }

    // 다음 슬라이드 표시
    $("#slide" + currentSlide).show();
  }

  // 페이지가 로드될 때 초기 슬라이드 표시
  nextSlide();

  // 3초마다 nextSlide 함수 호출하여 슬라이드 전환 (무한 반복)
  setInterval(nextSlide, 3000);
});

// 날씨
// 오늘 날짜출력
$(document).ready(function () {

  function convertTime() {
      var now = new Date();


      var month = now.getMonth() + 1;
      var date = now.getDate();

      return month + '월' + date + '일';
  }

  var currentTime = convertTime();
  $('.nowtime').append(currentTime);
});

//제이쿼리사용
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=a8501159eb9e48f3bb16a140c20e9c6f&units=metric', function(WeatherResult) {
  // 기온 출력을 위해 Math.round()를 사용하여 온도 값을 정수로 반올림
  var nowTemp = Math.round(WeatherResult.main.temp);
  var lowTemp = Math.round(WeatherResult.main.temp_min);
  var highTemp = Math.round(WeatherResult.main.temp_max);
  var pressure = Math.round(WeatherResult.main.pressure);
  var humidity = Math.round(WeatherResult.main.humidity);
  var wind = Math.round(WeatherResult.wind.speed);

  $('.SeoulNowtemp').html(nowTemp + ' °C');
  $('.SeoulLowtemp').html(lowTemp + '°C');
  $('.SeoulHightemp').html(highTemp + '°C');
  $('.pressure').html('<span class="texts">기압</span> &nbsp;&nbsp;' + pressure + ' Pa');
  $('.humidity').html('<span class="texts">습도</span> &nbsp;&nbsp;' + humidity + ' %');
  $('.wind').html('<span class="texts">풍속</span> &nbsp;&nbsp;' + wind + ' m/s');

  // 날씨 아이콘 출력
  // 날씨 상황에 따른 아이콘 추가하기
  var iconPath = "../images/weather_icon/"; //아이콘 파일경로

  var customWeatherIcons = {
    // 맑은날	
    "01d": iconPath + "clearSky_d.png",
    "01n": iconPath + "clearSky_n.png",
    // 약간 구름낀 날
    "02d": iconPath + "fewClouds_d.png",
    "02n": iconPath + "fewClouds_n.png",
    // 구름이 많은 날(맑은 흐림)
    "03d": iconPath + "scatterd_dn.png",
    "03n": iconPath + "scatterd_dn.png",
    // 구름이 많은 날(흐림)
    "04d": iconPath + "brokenClouds-dn.png",
    "04n": iconPath + "brokenClouds-dn.png",
    // 소나기가 오는 날
    "09d": iconPath + "showerRain_dn.png",
    "09n": iconPath + "showerRain_dn.png",
    // 비가 오는 날
    "10d": iconPath + "rain_d.png",
    "10n": iconPath + "rain_n.png",
    // 천둥번개 치는 날
    "11d": iconPath + "thunderstorm_dn.png",
    "11n": iconPath + "thunderstorm_dn.png",
    // 눈 
    "13d": iconPath + "snow_dn.png",
    "13n": iconPath + "snow_dn.png",
    // 안개
    "50d": iconPath + "mist_dn.png",
    "50n": iconPath + "mist_dn.png",
  };
  
  var weatherIconCode = WeatherResult.weather[0].icon;
  var weatherIconAlt = WeatherResult.weather[0].description;
  var weatherIconUrl = '<img class="weather-icons" src="' + customWeatherIcons[weatherIconCode] + '" alt="' + weatherIconAlt + '"/>';
      
  $('.SeoulIcon').html(weatherIconUrl);

  // 기온에 따른 이미지 표시
  var temperature = WeatherResult.main.temp;
  if (temperature <= 10) {
      // 추운 날씨 이미지
      $('.weatherExpression').html('<img src="#" alt="Cold">');
  } else if (temperature >= 20) {
      // 따듯한 날씨 이미지
      $('.weatherExpression').html('<img src="#" alt="Warm">');
  } else {
      // 온화한 날씨 이미지 또는 표시하지 않음
      $('.weatherExpression').html('<img src="#" alt="Cold">');
  }
});

// 모바일버전
let sw = true;
	
function showhide(){
    let x = document.getElementById("submenu-position");

    if(sw == true){
        x.style.display = "block";
        x.style.zIndex = "100";
        sw = false;
        document.getElementById("here").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #8B8989'></i>";
        document.getElementById("here").style.cssText = "position: fixed; top: 17px; left: 10px;";
    } else{
        x.style.display = "none";
        sw = true;
        document.getElementById("here").innerHTML = "<i class='fa-solid fa-bars fa-2xl' style='color: #8B8989'></i>";
        document.getElementById("here").style.cssText = "";
    }   
}

function showhide1(){
    let x = document.getElementById("rec");

    if(sw == true){
        x.style.display = "block";
        x.style.zIndex = "100";
        
        sw = false;
    } else{
        x.style.display = "none";
        
        sw = true;
    }   
}
		
function showhide2(){
    let y = document.getElementById("info");

    if(sw == true){
        y.style.display = "block";
        y.style.zIndex = "100";
        
        sw = false;
    } else{
        y.style.display = "none";
        
        sw = true;
    }   
}

function showhide3(){
    let z = document.getElementById("user");

    if(sw == true){
        z.style.display = "block";
        z.style.zIndex = "100";
        
        sw = false;
    } else{
        z.style.display = "none";
        
        sw = true;
    }   
}