import React from 'react'
import axios from 'axios';


class ChampionPage extends React.Component {
    super(props) {
        constructor(props);
        this.state = {name: this.props.championName, championInfo: {}}
        
    }

    fetchChampionData = function() {
        axios.get('http://localhost:5000/champions/' + this.state)
        .then(response => {
            this.setState({championInfo: response.json()})
        })
    }
    render() {
        return (
            <div>
                <p>{this.props.championInfo}</p>
                <p>{this.props.championName}</p>
            </div>
        )
    }
}

export default ChampionPage;