import Link from "next/link"

const data=[
  {
    id:'1',
    name:'Abdullah',
  },
  {
    id:'2',
    name:'Hanzla',
  },
  {
    id:'3',
    name:'Ahmad'
  },
]
const studentdata=()=>{
  return(
    <div>
      {
        data.map((item)=>{
          return(
            <div>
              <Link key={item.id} href={`/studentlist/${item.name}-${item.id}`}>    <h1>{item.name}</h1></Link>
          
            </div>
          )
        })
      }
    </div>
  )
}
export default studentdata