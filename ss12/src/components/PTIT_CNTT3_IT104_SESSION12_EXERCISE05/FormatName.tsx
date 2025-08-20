import React from 'react'

export default function FormatName() {
    
        const user={
        firstName:"Nguyễn Văn",
        lastName:"Nam",
    };
    function formatName(user:{firstName:string;lastName:string}) {
        return `Họ và tên: ${user.firstName} ${user.lastName}`
    }

  return (
    <div>    
        {formatName(user)}
    </div>
  )
}
