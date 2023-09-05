import './_product.scss';

const Product= ()=>{
    const productData=[
        {
            Pname:"Rado",
            Price:900,
            img:"rado.jpg"
        },
        {
            Pname:"Fossil",
            Price:400,
            img:"Fossil.jpg"
        },
        {
            Pname:"Fastrack",
            Price:300,
            img:"Fastrack.jpeg"
        },
        {
            Pname:"Rolex",
            Price:800,
            img:"Rolex.jpeg"
        },
        {
            Pname:"Titan",
            Price:1100,
            img:"Titan.jpeg"
        }
    ]

    return(
        <div className='product-container'>
            {
                productData.map((product,key)=>{
                    return(
                        <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../assets/images/shope/'+product.img)} height={250} width={250}/>
                            </div>
                            <div className='product-info'>
                                <h5><a href='#'>{product.Pname}</a></h5>
                                 <p className='product-price'>${product.Price}</p>
                                 <div className='product-rating'>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                 </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Product;