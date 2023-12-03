import React from 'react'

interface FeedBackCarouselProps {
    children: React.ReactNode;
}

const FeedBackCarousel = ({children} : FeedBackCarouselProps) => {
  return (
    <div className='flex gap-6 overflow-y-auto'>
        {children}
    </div>
  )
}

export default FeedBackCarousel