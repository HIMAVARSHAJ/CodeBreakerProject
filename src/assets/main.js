let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if((answer.value ='' ) || (attempt.value = ''))
    {
        setHiddenfields();
    }
    if(!validateInput(input.value))
    {
        return false
    }
    attempt.value ++;
    if(getResults(input))
    {
        setMessage("You Win! :)");
    }
    else setMessage("Incorrect, try again.");
}
function setHiddenfields()
{
    answer.value = Math.floor(Math.random()*10000).toString();
    while(answer.value.length<4){
        answer.value = "0" + answer.value;
    }
    attempt.value =0;
}
function setMessage(message)
{
    document.getElementById('message').innerHTML += message;
}
function validateInput(input)
{
    if(input.length = 4)
    {
        return true;
    }
    setMessage("Guesses must be exactly 4 characters long.")
    return false;
}
function getResults(input)
{  
    var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    var g= 0;
    for(var i=0;i<input.value.length;i++)
    {
     if(input.value.Atchar(i) == answer.value.Atchar(i)){
         html += '<span class="glyphicon glyphicon-ok"></span>';

     } else if(answer.indexof(input.value.Atchar(i)) > -1)
     {
         html += '<span class="glyphicon glyphicon-transfer"></span>';
     }else html += '<span class="glyphicon glyphicon-remove"></span>';
    }

    html += '</div></div>';
    document.getElementById('results').innerHTML = html;
    if(input.value == answer.value)
    {
        return true;
    }
    return false;
}   
