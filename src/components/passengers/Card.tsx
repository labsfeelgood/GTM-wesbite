
const Card = (props:any) => {
  console.log(props.ml)
  return (
    <div className={`flex flex-col items-center ]`} >
        <div className=' bg-[#D9D9D9] w-[300px] h-[300px] p-5 border-t-black border-l-black  border-2 border-r-[#C6C0B4] border-b-[#C6C0B4]'>
            <h3 className=' text-[32px] font-d-din-bold uppercase'>{props.heading}</h3>
            <p className=' font-d-din-regular text-[20px] uppercase'>{props.content}</p>
        </div>
    </div>
  )
}

export default Card