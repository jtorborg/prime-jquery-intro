var array = [];
var totalSalary = 0;
var indSalary = 0;
$(document).ready(function() {
    // var array = [];
    // var totalSalary = 0;
    // var indSalary = 0;

    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};



      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();
      console.log(values);
      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });
      console.log(values);
      console.log(indSalary);
      console.log(totalSalary);
      console.log(array);

      indSalary = parseFloat(values.salary);
      totalSalary += indSalary/12;
      values.salary = Math.round(indSalary);
      array.push(values);

      console.log(values);
      console.log(indSalary);
      console.log(totalSalary);
      console.log(array);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      $("#misc").text('$' + totalSalary);


      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + '</p>');
      $el.append('<p>' + empInfo.idnumber + '</p>');
      $el.append('<p>' + empInfo.jobtitle + '</p>');
      $el.append('<p>' + empInfo.salary + '</p>');

    }

    console.log(totalSalary);

    array.forEach(function(element) {
    totalSalary = totalSalary + (array[i].salary);


    });

});
