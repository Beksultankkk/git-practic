// let API= 'https://api.nasa.gov/planetary/apod?api_key=SxvUwvANedl82N9TfB0cK2UoeLxaSpDDjkXP5lce'
// fetch(API)
// .then(res=>res.json())
// .then(json=>{
//     console.log("json>>",json)
//     let h1=document.querySelector("h1")
//     let p=document.querySelector("p")
//     let img=document.querySelector('img')
//     let h2=document.querySelector('h2')
//     h1.innerHTML=json.date
//     p.innerHTML=json.explanation
//     img.src=json.url
//     h2.innerHTML=json.title


// })


let city_name = "osh"

let weather = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=6621546e1a94625a215c063e4320d66d`

fetch(weather)
    .then(res => res.json())
    .then(json => {
        console.log("weather>>>", json)
        let wind=document.querySelector('h2')
        let main=document.querySelector('h1')
    })



















































