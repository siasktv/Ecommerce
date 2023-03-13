import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Product = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  interface Product {
    _id: string
    name: string
    description: string
    brand: string
    price: number
    image:
      | {
          url: string
        }
      | string
  }

  const [product, setProduct] = useState<Product>({
    _id: '',
    name: '',
    description: '',
    brand: '',
    price: 0,
    image: '',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        if (!params.id) return // add check for undefined id
        const res = await axios.get(
          `http://localhost:3001/products/${params.id}`
        )

        setProduct(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    fetchProduct()
  }, [params.id])
  return (
    <StyledProduct>
      <ProductContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ImageContainer>
              <img
                src={
                  product.image && typeof product.image === 'object'
                    ? product.image.url
                    : product.image
                }
                alt="product"
              />
            </ImageContainer>
            <ProductDetails>
              <h3>{product.name}</h3>
              <p>
                <span>Brand:</span> {product.brand}
              </p>
              <p>
                <span>Description:</span> {product.description}
              </p>
              <Price>${product.price?.toLocaleString()}</Price>
            </ProductDetails>
          </>
        )}
      </ProductContainer>
    </StyledProduct>
  )
}

export default Product

const StyledProduct = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
`

const ProductContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  padding: 2rem;
`

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
  }
`

const ProductDetails = styled.div`
  flex: 2;
  margin-left: 2rem;

  h3 {
    font-size: 35px;
  }

  p span {
    font-weight: bold;
  }
`

const Price = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 25px;
`
