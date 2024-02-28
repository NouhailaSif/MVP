// app.js
document.addEventListener('DOMContentLoaded', () => {
    const dataForm = document.getElementById('dataForm');
    const dataList = document.getElementById('dataList');
  
    // Fetch data from the backend
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();
      displayData(data);
    };
  
    // Display data in the UI
    const displayData = (data) => {
      dataList.innerHTML = '';
      data.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('data-card');
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        `;
        dataList.appendChild(card);
      });
    };
  
    // Form submission event
    dataForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      // Save data to the backend
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
  
      const newData = await response.json();
      fetchData(); // Refresh the displayed data after saving
      dataForm.reset();
    });
  
    // Initial data fetch
    fetchData();
  });  
