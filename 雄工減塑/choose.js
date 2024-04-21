var continue_button=document.getElementById("continue").addEventListener('click',async function() {
    var reduce_check=document.getElementById("reduce").checked;
    var animal_check=document.getElementById("animal").checked;
    var eco_check=document.getElementById("eco").checked;
    var green_check=document.getElementById("green").checked;
    var username="test2";
    var result=reduce_check+"_"+animal_check+"_"+eco_check+"_"+green_check;
    var type="upload";
    var lds = document.getElementById('loading');
    lds.style.display='inline';
    console.log("https://script.google.com/macros/s/AKfycbxoFCSuQPmNh4vQmoFqbikgxacyRoqOHrOI2pYauVHsqXrsrLn5I_jLvyijmqWlY1LJlQ/exec?type="+type+"&user="+username+"&result="+result);
    await fetch("https://script.google.com/macros/s/AKfycbxoFCSuQPmNh4vQmoFqbikgxacyRoqOHrOI2pYauVHsqXrsrLn5I_jLvyijmqWlY1LJlQ/exec?type="+type+"&user="+username+"&result="+result, {
        mode: 'no-cors'
   });
    location.href='http://harrywhr950315.ddns.net/doc';
});




