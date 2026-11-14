import './FilterSidebar.css';
import { useState } from 'react';
function FilterSidebar({ onApplyFilters }){
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    function handleApply() {
        onApplyFilters(search, minPrice, maxPrice, sortOrder);
    }

    function handleReset() {
        setSearch('');
        setMinPrice('');
        setMaxPrice('');
          setSortOrder('');
          onApplyFilters('', '', '', '');
    }
    return(
    <div className="filter-sidebar">
            <input type="text"
            placeholder=" search by hotel name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} />

            <input type="number" 
            placeholder="min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}/>

            <input type="number"
            placeholder="Maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            />
             <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="">Default order</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
           
          <button className="filter-button" onClick={handleApply} > Apply Filters</button>
            <button className="reset-button" onClick={handleReset} >Clear</button>
    </div>
    );
}
export default FilterSidebar