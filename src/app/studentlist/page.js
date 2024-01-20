'use client'
// StudentList.js
import Link from "next/link";

const studentData = [
  { id: 1, name: "Abdullah" },
  { id: 2, name: "Hamid" },
  { id: 3, name: "John" },
  { id: 4, name: "Emma" },
  // Add more students as needed
];

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      {studentData.map((student) => (
        <Link key={student.id} href={`/studentlist/${student.name}-${student.id}`}>
          <h1>{student.name}</h1>
        </Link>
      ))}
      <Link href='/'>home</Link>
    </div>
  );
}
