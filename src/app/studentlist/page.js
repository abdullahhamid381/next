'use client'
// StudentList.js
import Link from "next/link";

const studentData = ["abdullah", "hamid", "john", "emma"]; // Add more student names as needed

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      {studentData.map((studentName) => (
        <Link key={studentName} href={`/studentlist/${studentName}`}>
          <h1>{studentName}</h1>
        </Link>
      ))}
    </div>
  );
}
