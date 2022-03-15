import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 1,
        error: false
    }

    
    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }  


    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected} 
                getData={this.gotService.getAllHouses} 
                renderItem={({name}) => name}
            />
        )

        const charDetails = (
            <CharDetails itemId={this.state.selectedHouse} getData={this.gotService.getHouse}>
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='title' label='Title'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}