import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import './App.css'; // Import the CSS file

const App = () => {
  const dispatch = useDispatch();

  // Access state from Redux
  const { users, loading, error } = useSelector((state) => state.user);

  return (
    <div className="app-container">
      <header>
        <h1>User List</h1>
      </header>
      <main>
        {loading && <p className="loading-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}
        <button className="fetch-button" onClick={() => dispatch(fetchUsers())}>
          Fetch Users
        </button>
        <ul className="user-list">
          {users.map((user, index) => (
            <li key={index} className="user-item">
              {user}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
