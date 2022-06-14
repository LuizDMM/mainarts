import CategoryItem from 'components/category-item/category-item.component'
import './categories-grid.styles.scss'

const CategoriesGrid = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoriesGrid
