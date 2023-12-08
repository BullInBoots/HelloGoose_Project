interface PageIndicatorItemProps {
    isActive?: boolean;
    itemNumber: number;
}

const PageIndicatorItem = ({isActive, itemNumber}: PageIndicatorItemProps) => {
    const itemStyle = isActive ? {backgroundColor: '#3197D9', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#3197D9'}; 
    
  return (
    <div style={itemStyle} className='w-[22px] h-[22px] mr-1 rounded-sm flex items-center justify-center border-2 border-secondary'>
        {itemNumber}
    </div>
  )
}

export default PageIndicatorItem