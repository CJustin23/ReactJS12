import React from 'react';
type UserRowProps = {
  index: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
};

export default function Row({ index, name, dob, gender, address }: UserRowProps) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{dob}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>
        <button style={{ marginRight: '8px', backgroundColor: '#e5e7eb', border: 'none', padding: '4px 10px', borderRadius: '4px' }}>Sửa</button>
        <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '4px 10px', borderRadius: '4px' }}>Xóa</button>
      </td>
    </tr>
  );
}
