/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = employees
    .filter(employee => employee.profession === "developer")
    .map(employee => employee.name);
      console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    const developers = [];
  
    employees.forEach(employee => {
      if (employee.profession === "developer") 
      {
        developers.push(employee.name);
      }
    });

    console.log(developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    const additionalEmployees = [
        { id: 5, name: "alex", age: "22", profession: "developer" },
        { id: 6, name: "emma", age: "21", profession: "admin" },
        { id: 7, name: "michael", age: "19", profession: "developer" }
      ];
      
      const concatenatedArray = employees.concat(additionalEmployees);
      
      console.log(concatenatedArray);
  }
  PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
ConcatinateArray();