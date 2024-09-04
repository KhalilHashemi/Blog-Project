import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) => setUsers(data));
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.data?.map((user) => (
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default Card;
