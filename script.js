function fetchData(){
    console.log("mdnzsnd");
    let place=place_Name.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
    .then(res=>{
        if(res.ok){
            return res.json()
        }else
        {
            throw alert("Enter Valid Location")
        }
    })
    .then(data=>displayValues(data)).catch(err=>console.log(err.message))

    
}
function displayValues(data){
    // console.log(data);
    let location=data.name
    let temp=data.main.temp+"\u00B0"
    let main=data.weather[0].main
    let humidity=data.main.humidity+"%"
    let wind=data.wind.speed+"kmph"
    let pressure=data.main.pressure
    var date= new Date()
    let country= data.sys.country
    let feel=data.main.feels_like+"\u00B0"
    console.log(country);

   document.getElementById("temp").innerHTML=temp
   document.getElementById("date").innerHTML=date
   document.getElementById("location").innerHTML=location
   document.getElementById("condition").innerHTML=main
   document.getElementById("country").innerHTML=country
   document.getElementById("humidity").innerHTML=humidity
   document.getElementById("wind").innerHTML=wind
   document.getElementById("pressure").innerHTML=pressure
   document.getElementById("feelsLike").innerHTML="feels like "+feel




}