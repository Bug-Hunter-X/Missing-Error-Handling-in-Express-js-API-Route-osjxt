const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // No error handling here. Sends a 500 status code to the client which might reveal information to the client
      console.error(err);
      res.status(500).send('Server Error');
    } else if (user) {
      res.json(user);
    } else {
      // Missing a 404 status code. sends a 200 status code, which is not appropriate
      res.json({ message: 'User not found' });
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));