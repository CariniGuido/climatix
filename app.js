


window.addEventListener('load', () => {


    let lon
    let lat
    let temperaturaValor = document.querySelector('#temperatura-valor')
    let temperaturaDescripcion = document.querySelector('#temperatura-descripcion')
    let ubicacion = document.querySelector('#ubicacion')
    let iconoAnimado = document.querySelector('#icono-animado')
    let vientoVelocidad = document.getElementById('viento-velocidad')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {


            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=eb3171ef01e845b2ade7d52a9184d177`
           

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                 console.log(data)
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`




                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                          iconoAnimado.src='animated/thunder.svg'
                          console.log('TORMENTA');
                          break;
                        case 'Drizzle':
                          iconoAnimado.src='animated/rainy-2.svg'
                          console.log('LLOVIZNA');
                          break;
                        case 'Rain':
                          iconoAnimado.src='animated/rainy-7.svg'
                          console.log('LLUVIA');
                          break;
                        case 'Snow':
                          iconoAnimado.src='animated/snowy-6.svg'
                            console.log('NIEVE');
                          break;                        
                        case 'Clear':
                            iconoAnimado.src='animated/day.svg'
                            console.log('LIMPIO');
                          break;
                        case 'Atmosphere':
                          iconoAnimado.src='animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoAnimado.src='animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                          iconoAnimado.src='animated/cloudy-day-1.svg'
                          console.log('por defecto');
                    }

                })
                .catch(error => {
                    console.log(error)
                })


        })
    }

})
