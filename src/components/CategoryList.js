import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from "reactstrap"

export default class CategoryList extends Component {

    state = {

        movieCategorie: [
            {
                id: 1,
                categorieName: "Horror"
            },
            {
                id: 2,
                categorieName: "Fantastic"
            },
            {
                id: 3,
                categorieName: "Comedy"
            },
            {
                id: 4,
                categorieName: "Action"
            },
        ],

    }

    render() {

        return (

            <>
                <ListGroup flush>
                    <div className='mt-5 mb-4'>
                        <h2>Movie Categorie</h2>
                    </div>

                    {this.state.movieCategorie.map(categorie => (
                        <ListGroupItem
                            key={categorie.id}
                            href="#"
                            tag="a"
                            onClick={this.props.getCategorieFunc}
                        >
                            {categorie.categorieName}
                        </ListGroupItem>
                    ))}

                </ListGroup>
            </>

        )
    }
}
