document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let fileInput = document.getElementById('fileUpload');
    let file = fileInput.files[0];
    
    if (file) {
      // Simulate upload and add the file to the list of uploaded resources
      let resourceList = document.getElementById('resourceList');
      let listItem = document.createElement('li');
      listItem.textContent = file.name + " (uploaded)";
      
      resourceList.appendChild(listItem);
      fileInput.value = ''; // Reset file input
    } else {
      alert("Please select a file to upload.");
    }
  });
  