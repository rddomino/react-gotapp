import React, {Component} from 'react';
import gotService from '../services/gotService';
import CharDetails, {Field} from '../charDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    state = {
        selectedBook: 3
    }

    render() {
        return (
            <CharDetails itemId={this.state.selectedBook} getData={this.gotService.getBook}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )
    }
}