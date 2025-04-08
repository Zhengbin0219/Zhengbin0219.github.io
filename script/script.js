
function showMessage()
{
    let X =5;
    let name = "James"
    let age = 21;
    let bonus = age + 5
    let school = "SAIT"
    let message = "Hey"+ name + ",you age is" +age + "You are qualitfied to be at" + school + ". You have got a bonus at age" + bonus;
    alert(message)
}

function checkAge()
{
    let age = 19
    if (age >=18)
    {
        alert("Hey you can enter the party. You are old enough")
    }
}
 function showMany()
{
    for(let i=1; i<=10; i=i+1){  
        alert("Don't close me! You close me" + i +"times" )
    }

}
 function changeColor()
{
    document.getElementById("main").style.color= 'red'
    document.getElementById("main").style.backgroundColoer= 'black'
}
  function changeToCat()
  {
    document.getElementById("catdog").src= 'https://catfriendly.com/wp-content/uploads/2021/08/cat-lying-down.jpg'
   
  }
  function changeToDog()
  {
    document.getElementById("catdog").src= 'https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=4%2C12%2C2679%2C1521&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'
   
  }