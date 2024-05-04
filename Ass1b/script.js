// Updated dummy data for initial display
let initialFlats = [
    { id: 1, flatNumber: '101', residentName: 'John Doe', numRooms: 2, bhk: '2 BHK', carpetArea: 800, rent: 12000, bathrooms: 2 },
    { id: 2, flatNumber: '202', residentName: 'Jane Smith', numRooms: 3, bhk: '3 BHK', carpetArea: 1200, rent: 18000, bathrooms: 2 },
  ];

  // Function to render flats to the list
  function renderFlats() {
    const flatList = document.getElementById('flatList');
    flatList.innerHTML = '';
    
    initialFlats.forEach(flat => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${flat.flatNumber} - ${flat.residentName}
        <button onclick="showFlatDetails(${flat.id})">View</button>
        <button onclick="deleteFlat(${flat.id})">Delete</button>
      `;
      flatList.appendChild(li);
    });
  }
  
  // Function to add a new flat
  function addFlat() {
    const flatNumber = document.getElementById('flatNumber').value;
    const residentName = document.getElementById('residentName').value;
    const numRooms = document.getElementById('numRooms').value;
    const bhk = document.getElementById('bhk').value;
    const carpetArea = document.getElementById('carpetArea').value;
    const rent = document.getElementById('rent').value;
    const bathrooms = document.getElementById('bathrooms').value;
  

    if (!flatNumber || !residentName || !numRooms || !bhk || !carpetArea || !rent || !bathrooms) {
      alert('Please fill in all fields.');
      return;
    }
    const newFlat = {
      id: Date.now(),
      flatNumber,
      residentName,
      numRooms: parseInt(numRooms),
      bhk,
      carpetArea: parseInt(carpetArea),
      rent: parseInt(rent),
      bathrooms: parseInt(bathrooms),
    };
    initialFlats.push(newFlat);
  
    // Clear the form fields
    document.getElementById('flatForm').reset();
  
    // Render the updated list
    renderFlats();
  }
  
  // Function to show detailed flat view
  function showFlatDetails(id) {
    const flat = initialFlats.find(flat => flat.id === id);
    const detailedView = document.getElementById('detailedView');
    detailedView.innerHTML = `
      <p>Flat Number: ${flat.flatNumber}</p>
      <p>Resident Name: ${flat.residentName}</p>
      <p>Number of Rooms: ${flat.numRooms}</p>
      <p>BHK: ${flat.bhk}</p>
      <p>Carpet Area: ${flat.carpetArea} sq ft</p>
      <p>Rent: ${flat.rent}</p>
      <p>Bathrooms: ${flat.bathrooms}</p>
    `;
  
    // show function
    const flatDetails = document.getElementById('flatDetails');
    flatDetails.style.display = 'block';
  }
  
  // delete function 
  function deleteFlat(id) {
    initialFlats = initialFlats.filter(flat => flat.id !== id);
    renderFlats();
  }
  