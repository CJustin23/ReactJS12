import React from 'react'

export default function Ex01() {
  const course = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];
  return (
    <div>
      <h2>Danh sách khoá học</h2>
      <ol>
        {course.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
