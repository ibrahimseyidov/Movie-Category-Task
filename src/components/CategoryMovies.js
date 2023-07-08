import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap"
import PropTypes from "prop-types"

export default class CategoryMovies extends Component {

    state = {
        "movies": [
            {
                "id": 1,
                "name": "The Conjuring",
                "category": "Horror"
            },
            {
                "id": 2,
                "name": "Fantastic Beasts and Where to Find Them",
                "category": "Fantastic"
            },
            {
                "id": 3,
                "name": "Anchorman: The Legend of Ron Burgundy",
                "category": "Comedy"
            },
            {
                "id": 4,
                "name": "Die Hard",
                "category": "Action"
            },
            {
                "id": 5,
                "name": "A Quiet Place",
                "category": "Horror"
            },
            {
                "id": 6,
                "name": "Harry Potter and the Sorcerer's Stone",
                "category": "Fantastic"
            },
            {
                "id": 7,
                "name": "Bridesmaids",
                "category": "Comedy"
            },
            {
                "id": 8,
                "name": "Mission: Impossible",
                "category": "Action"
            },
            {
                "id": 9,
                "name": "The Babadook",
                "category": "Horror"
            },
            {
                "id": 10,
                "name": "The Lord of the Rings: The Fellowship of the Ring",
                "category": "Fantasy"
            },
            {
                "id": 11,
                "name": "Superbad",
                "category": "Comedy"
            },
            {
                "id": 12,
                "name": "Mad Max: Fury Road",
                "category": "Action"
            }
        ]
    }


    static defaultProps = {
        currentCategorie: "Empty Category"
    }


    render() {
        return (
            <>
                <ListGroup>
                    <div className='mt-5 mb-4'>
                        <h2>The Movies - {this.props.currentCategorie}</h2>
                    </div>
                    {
                        this.state.movies.map((movie) => {
                            if (this.props.currentCategorie === movie.category) {
                                return <ListGroupItem >
                                    {movie.name}
                                </ListGroupItem>
                            }
                        })
                    }
                </ListGroup>
            </>
        )
    }
}

CategoryMovies.propTypes = {
    currentCategorie: PropTypes.string.isRequired
}