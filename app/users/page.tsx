import Link from "next/link";
import React, { use } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <h3>
        <Link href="/users/newfolder">NewPage</Link>
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default UserPage;
