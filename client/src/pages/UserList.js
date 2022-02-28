import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(async () => {
    const res = await axios.get('http://localhost:4000/list');
    setListUser(res.data);
  }, []);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Usuario</th>
          <th scope='col'>Email</th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
