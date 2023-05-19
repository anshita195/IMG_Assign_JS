// Use dynamic import() for importing the node-fetch module
import('node-fetch')
  .then(module => {
    const fetch = module.default;

    // Fetch the user data from the API
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        // Access the user data from the response
        const users = data.data;

        // Format the data for console.table()
        const tableData = users.map(user => ({
          Id: user.id,
          Email: user.email,
          FirstName: user.first_name,
          LastName: user.last_name,
          Avatar: user.avatar
        }));

        // Display the table in the console
        console.table(tableData);
      })
      .catch(error => {
        console.log('Error fetching user data:', error);
      });
  })
  .catch(error => {
    console.log('Error importing node-fetch:', error);
  });
