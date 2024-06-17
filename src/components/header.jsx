function Header(props){
    return(
        <div>
             <h1 className="text-3xl font-medium max-md:text-xl">
          Hello {props.name}❤️
        </h1>
        <p className="max-md:text-lg">I help you manage Your activities:)</p>
        </div>
    )

}
export default Header