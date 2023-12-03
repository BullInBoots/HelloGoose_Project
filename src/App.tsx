import './App.css'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import Category from './components/HeroCategory/Category'
import CategoryItem from './components/HeroCategory/CategoryItem'
import FeedBack from './components/FeedBack/FeedBack'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavigationBar />
      <Hero />
      <Category>
        <CategoryItem label="Foods" bgImg='../../public/images/category1.png'/>
        <CategoryItem label="Stationery" bgImg='../../public/images/category2.png'/>
        <CategoryItem label="Clothes" bgImg='../../public/images/category3.png'/>
        <CategoryItem label="Board Games" bgImg='../../public/images/category4.png'/>
      </Category>
      <FeedBack/>
      <Footer/>
    </>
  );
}

export default App
