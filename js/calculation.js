

//get the number of length of list

const calculate = document.getElementById('calculate')
calculate.addEventListener('click',function()
{
  const ull = document.getElementById('ull')
  const numberOfList = ull.childElementCount;
  const perPlayer = document.getElementById("perPlayer")
  const perPlayerValue = perPlayer.value;
  const expense = document.getElementById('expense')
 //' const exexx =parseInt(expense.innerText)
  if(isNaN(parseInt(perPlayerValue))  == true || exexx.innerText == '' )
  {
        Swal.fire({
          html:
            '<p style="font-size:25px;font-family:Edu TAS Beginner, cursive">Wrong Input Type For Calculate<p>'  
            
        })
  }
  else
  {
    expense.innerText = (parseInt(perPlayerValue) * parseInt(numberOfList)).toString()
    perPlayer.value= ''
  }
})

const calculateTotal = document.getElementById('calculateTotal')
calculateTotal.addEventListener('click',function()
{

  const expense = document.getElementById('expense')
  const expenseValue = parseInt(expense.innerText);
  console.log(expense)
  const manager= document.getElementById("manager")
  const managerValue = parseInt(manager.value);
  console.log(managerValue)
  const coach = document.getElementById("coach")
  const coachValue = parseInt(coach.value);
  console.log(coachValue)
  const total = expenseValue+managerValue+coachValue;
  console.log(total)
  const expenseTotal = document.getElementById('expenseTotal')
  
  if(isNaN(total)  == true  )
  {
      
        Swal.fire({
          html:
            '<p style="font-size:25px;font-family:Edu TAS Beginner, cursive">Wrong Input Type For Calculate Total<p>'  
            
        })
  }
  else
  {
    expenseTotal.innerText = total.toString()
    coach.value=''
    manager.value=''
  }
  
}) 