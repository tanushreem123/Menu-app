import logo from './logo.svg'
import './App.css'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import { useState } from 'react'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCatogories] = useState(allCategories)

  const filterItems = (category) => {
    if (category == 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <div className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  )
}

export default App
