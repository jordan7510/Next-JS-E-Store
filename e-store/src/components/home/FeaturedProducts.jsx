import React from 'react'
import ProductsCard from './ProductsCard'
import Container from '../Container'

export default function FeaturedProducts() {
    return (
        <Container>
            <div className='px-4 pb-8 mt-10'>
                <h1 className='text-center font-bold text-3xl py-4'>Featured Products</h1>
                <ProductsCard />
            </div>
        </Container>
    )
}
