import PageIndicatorItem from "./PageIndicatorItem"

const PageIndicator = () => {
    
  return (
    <div className="flex mx-auto w-fit my-6">
        <PageIndicatorItem isActive={true} itemNumber={1} />       
        <PageIndicatorItem isActive={false} itemNumber={2} />       
        <PageIndicatorItem isActive={false} itemNumber={3} />       
        <div className="text-primary mr-1">...</div>
        <PageIndicatorItem isActive={false} itemNumber={27} />       
        <PageIndicatorItem isActive={false} itemNumber={28} />       
        <PageIndicatorItem isActive={false} itemNumber={29} />       
    </div>
  )
}

export default PageIndicator