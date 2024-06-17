function Card(props){
    return(
       
              <div style={{backgroundColor:props.bgColor}} className=" px-10 py-5 border rounded-md text-center flex-grow">
        <h1 className="font-medium text-2xl max-md:xl">{props.title}</h1>
        <p className="max-md:text-base">{props.subtitle}</p>

       </div>
       
    )

}
export default Card
