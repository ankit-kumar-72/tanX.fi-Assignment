import '../index.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.image} width="100%" />
                                <p>{productItem.name} | {productItem.description} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <p> {productItem.rating} </p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList