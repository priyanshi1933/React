//functional components
const Product:React.FC<{pCode:number,pName:string}>=(props)=>{
    return(
        <div>
            Product Component
            {props.pCode} - {props.pName}
        </div>
    )
}
export default Product;