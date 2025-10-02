document.addEventListener('DOMContentLoaded', function () {
  const dataContainer = document.getElementById('api-data');
  if (!dataContainer) {
    console.error('Element with id "api-data" not found. Check your HTML for the correct id and that the script is loaded after the element.');
    return;
  }
  fetchUserData(dataContainer);
});

async function fetchUserData(dataContainer) {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok. Status: ' + response.status);
    }

    const users = await response.json();

    
    dataContainer.innerHTML = '';

  
    const userList = document.createElement('ul');
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
   
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}
