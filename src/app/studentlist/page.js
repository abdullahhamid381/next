import Link from "next/link";

export default function Studentlist(){
    return(
        <div>
            <h1>student list</h1>
            <Link href='/studentlist/abdullah/1'>abdullah</Link>
            <Link href='/studentlist/hamid/2'>hamid</Link>
        </div>
    )
}