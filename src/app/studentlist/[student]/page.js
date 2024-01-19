
import Link from "next/link"

 const Studetdetail=({params})=>{
    return(
        <div>
            <h1>Studetdetail</h1>
            <h2>Name : {params.student}</h2>
            <Link href='/studentlist'>Back</Link>
        </div>
    )
}
export default Studetdetail