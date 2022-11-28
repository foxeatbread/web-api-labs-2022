import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genreModel';
import users from './users';
import genres from './genres';
import dotenv from 'dotenv';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await userModel.collection.insertMany(users);
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}
async function loadGenres () {
    console.log('load genres Data');
    try {
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genres Data: ${err}`);
    }
  }

app.use(express.json());
app.use(session({
    secret: 'ilikecake',
    resave: true,
    saveUninitialized: true
  }));
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}