import React from 'react'
import CardMolecule from '../../molecules/CardMolecule/CardMolecule'
import './BooksOrganism.style.scss'
const BooksOrganism = () => {
  return (
    <div className="book-container">
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/02.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/03.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/04.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/05.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/06.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/07.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/02.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/03.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/04.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/05.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/06.jpg' discount="75%" category="Featured"/>
        <CardMolecule name="sample name" author="sample Author" price="300$" imgUrl='public/07.jpg' discount="75%" category="Featured"/>
    </div>
  )
}

export default BooksOrganism