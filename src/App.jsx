import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import Products from './components/Products'
import Quizz from './components/Quizz'
import BubbleSortVisualization from './components/Bubble'
import explorer from './constant/FolderData'
import FileExplorer from './components/FileExplorer'
import comments from './constant/commentData'
import Comments from './components/Comments'

function App() {
  const [products, setProducts] = useState([])
  const [explorerData, setExplorerData] = useState(explorer)
  const [nestedCommentsData, SetNestedCommentsData] = useState(comments)


  const fetchProducts = async () => {

    const res = await fetch('https://dummyjson.com/products?limit=100');

    const data = await res.json();
    console.log(data)

    if (data) {
      setProducts(data.products)
    }
    console.log(products[0])
  }
  useEffect(() => {

    fetchProducts()
  }, [])

  return (
    <>
      {/* <Accordian /> */}
      <Products data={products}  />
      {/* <Quizz /> */}
      {/* <BubbleSortVisualization /> */}
      {/* <FileExplorer explorer={explorer} />  */}
      {/* <Comments comments={nestedCommentsData} /> */}
    </>
  )
}

export default App
