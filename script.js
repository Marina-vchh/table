const addEmployees = (data) => {
   const form = document.querySelector('#formId');
   const name = document.querySelector("#inputName");
   const birthday = document.querySelector('#inputBirthdayDate');
   const work = document.querySelector('#inputWorkDate');
   const salary = document.querySelector('#inputSalary');
   
   data.employee.push({
      id: Date.now(),
      checked: false,
      nameEmployee: name.value,
      birthdayEmployee: birthday.value,
      workEmployee: work.value,
      salaryEmployee: salary.value,
   })
   form.reset();
}

const drawList = (data, tbody) => {
   tbody.innerHTML = " ";
   data.employee.forEach((item) => {
      tbody.innerHTML += `<tr id =${item.id}>
      <td><input type="checkbox" id = "${item.id}"></td>
      <td>${item.nameEmployee}</td>
      <td>${item.birthdayEmployee}</td>
      <td>${item.workEmployee}</td>
      <td>${item.salaryEmployee}</td>
      </tr>`
   })
}

const sumEmployees = (data) => {
   const amountCounter = document.querySelector('#counterAmount')
   amountCounter.innerHTML = data.employee.length;
}

const checkedEmployees = (data, event) => {
      if(event.target.tagName === 'INPUT'){
      const checkboxId = event.target.id;
      data.employee.map(item => {
         if(item.id === +checkboxId){
            item.checked = !item.checked;
         }
         return item;
      })
      }
}

const deleteEmployees = (data) => {
   data.employee.forEach((item, index) => {
      if(item.checked === true){
         data.employee.splice(index, 1)
      }
   })
}

const sumSalaryEmployees = (data) => {
   const salaryCounter = document.querySelector('#counterSalary');
   let sum = 0;
   data.employee.forEach((item) => {
   if(item.checked === true){
      sum += +item.salaryEmployee;
   }
   return sum
   })
   salaryCounter.innerHTML = `${sum}`;
}


const init = () => {
const buttonAdd = document.querySelector('#buttonAdd');
const sumSalary = document.querySelector('#buttonSumId');
const tbody = document.querySelector('#tbody');
const buttonFire = document.querySelector('#buttonFireId');

const data = {
   employee: [],
}

buttonAdd.addEventListener('click', (e) => {
   e.preventDefault()
   addEmployees(data);
   drawList(data, tbody);
})

tbody.addEventListener('click', (event) => {
   checkedEmployees(data, event);
})

buttonFire.addEventListener('click', () => {
   deleteEmployees(data);
   drawList(data, tbody);
})

sumSalary.addEventListener('click', () => {
   sumSalaryEmployees(data);
})
}

init()