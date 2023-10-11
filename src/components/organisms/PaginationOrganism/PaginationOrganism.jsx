import React from 'react'
import './PaginationOrganism.style.scss'    
import PaginationMolecule from '../../molecules/PaginationMolecule/PaginationMolecule'


const PaginationOrganism = () => {
  return (
    <div className="pagination">
        <p>
            showing 1-12 of 100 results
        </p>
        <PaginationMolecule
             totalItems={24}
             itemsPerPage={12}
        />
    </div>
  )
}

export default PaginationOrganism