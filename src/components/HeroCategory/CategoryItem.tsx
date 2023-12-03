export interface CategoryItemProps {
    label: string;
    bgImg?: string;
}

const backgroundImageStyle = (imgUrl:string) => {
    return {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
}

const CategoryItem = ({label, bgImg}: CategoryItemProps) => {
  return (
    <div className='w-[275px] h-[350px] ' style={bgImg ? backgroundImageStyle(bgImg) : {backgroundColor: 'red'}}>
        <div className='px-8 py-1 bg-white bg-opacity-80 w-fit mx-auto mt-6 rounded-full text-xl font-medium font-Inter drop-shadow-lg'>
            {label}
        </div>
    </div>
  )
}

export default CategoryItem