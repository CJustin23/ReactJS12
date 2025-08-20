import React from 'react'

export default function Ex02() {
    let a=10;
    let b=5;
    let add=(x:number,y:number):number =>x+y;
    let subtract=(x:number,y:number):number =>x-y;
    let multiply=(x:number,y:number):number =>x * y;
    let divide=(x:number,y:number)=>x/y;
  return (
    <div>
      <h2>Kết quả các phép tính</h2>
      <li>{a}+{b}={add(a,b)}</li>
      <li>{a}-{b}={subtract(a,b)}</li>
      <li>{a}*{b}={multiply(a,b)}</li>
      <li>{a}/{b}={divide(a,b)}</li>
    </div>
  )
}
