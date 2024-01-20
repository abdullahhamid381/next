export default function({params}){
    return(
 <div>
           <h1>lecturre {params.study[0]}</h1>
           <p>Day : {params.study[1]}</p>
 </div>
    )
}