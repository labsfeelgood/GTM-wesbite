interface TestimonialCardParams {
  image:string;
  heading:string;
  content:string
}
const TestimonialCard :React.FC<TestimonialCardParams> = ({image , heading , content}) => {
  return (
    <div className="flex flex-col gap-4 w-[330px] items-center justify-center border border-white">
      <div className="w-[200px] h-[200px] border-[#7A8A99] rounded-full border-[2px] shadow-lg shadow-[#7A8A99] mb-3">
        <img src={image} />
      </div>
      <h3 className="uppercase font-d-din-bold text-white text-[24px]">{heading}</h3>
      <p className="text-white text-[24px] font-d-din-regular mx-auto text-center">{content}</p>
    </div>
  )
  
}

export default TestimonialCard