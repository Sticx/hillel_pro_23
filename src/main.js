fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        document.querySelector('.package-name').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector('.pressure').innerHTML = data.main.pressure+' hPa';
        document.querySelector('.description').innerHTML = data.weather[0]['description'];
        document.querySelector('.humidity').innerHTML = data.main.humidity+' %';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h ' + data.wind.deg+'&deg'
        document.querySelector('.features li').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0]['icon']}.png ">`

    })
    .catch(function (error) {
        console.log(error);
    })