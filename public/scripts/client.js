
// makes data cards hidden on init
  document.getElementById('output').style.visibility = 'hidden';
// event listener
  document.getElementById('lbsInput').addEventListener('input', function(e){
    console.log("event click");
    document.getElementById('output').style.visibility = 'visible';
// asigns input value to a variable
    let lbs = e.target.value;
// displays data
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
  });
