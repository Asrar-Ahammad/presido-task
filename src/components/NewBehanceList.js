import React, { useState } from 'react'
import BehanceList from './BehanceList';

const NewBehanceList = () => {
    const [filterCat, setFilter] = useState(null);
    return (
        <div>
            <BehanceList filterState={filterCat} setFilterState={setFilter} />
        </div>
    )
}

export default NewBehanceList