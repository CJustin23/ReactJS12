import React from 'react'

export default function Ex03() {
    let user={
        name:'Nguyễn văn A',
        email:'nguyenvana@example.com',
        age:21,
        address:'123 Trường Chinh,Hà Nội',
        phone:'0123 456 789',
    };
  return (
    <div>
        <h2>Thông tin người dùng</h2>
        <p><strong>Họ và tên : </strong>{user.name}</p>
        <p><strong>Email:</strong>{user.email}</p>
        <p><strong>Tuổi :</strong>{user.age}</p>
        <p><strong>Địa chỉ :</strong>{user.address}</p>
        <p><strong>Số điện thoại :</strong>{user.phone}</p>
      
    </div>
  )
}
