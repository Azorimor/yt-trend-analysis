import app from './app';
import {PORT} from './utils/config';
import client from './utils/mongo';

client
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
      // Testing the connection
      const collection = client.db('ytt').collection('testing');
      // perform actions on the collection object
      collection.insertOne({message: 'Testobject.'});
    });
  })
  .catch(error => {
    console.error(error);
  });
