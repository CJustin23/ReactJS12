import React from 'react';
import Row from './Row';

const users = [
  {
    id: 1,
    name: 'Malcolm Lockyer',
    dob: '21/03/1961',
    gender: 'Nam',
    address: 'New york',
  },
  {
    id: 2,
    name: 'Maria',
    dob: '11/02/1990',
    gender: 'Nữ',
    address: 'London',
  },
];

export default function Table() {
  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9fafb' }}>
        <thead style={{ backgroundColor: '#f3f4f6' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px' }}>STT</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Họ và tên</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Ngày sinh</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Giới tính</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Địa chỉ</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Row
              key={user.id}
              index={index + 1}
              name={user.name}
              dob={user.dob}
              gender={user.gender}
              address={user.address}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
