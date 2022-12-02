function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        return cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
  const data = getData("https://jsonplaceholder.typicode.com/users", function(data) {
        if(data.length > 0){
          var temp = "";
  
          data.forEach((i)=>{
            temp += "<tr>";
            temp += `<td>${i.id}</td>`;
            temp += `<td>${i.name}</td>`;
            temp += `<td>${i.username}</td>`;
            temp += `<td>${i.email}</td>`;
            temp += `<td>${i.address.street}, ${i.address.suite}, ${i.address.city}</td>`;
            temp += `<td>${i.company.name}</td>`;
          })
  
          document.getElementById("data").innerHTML = temp;
        }
  });