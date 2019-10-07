import React from 'react';


export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'Area 1',
            'Area 2',
            'Area 3',
            'Area 4',
            'Area 5',
            'Area 6',
            'Area 7',
        ];
        this.state = {
            suggestions: [],
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.legth > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = this.items.sort().filter(v => v.test(regex))
        }
        this.setState(() => ({ suggestions }));
    }

    renderSuggestion() {
        const { suggestions } = this.state;
        if (suggestions, length === 0) {
            return null;
        }
        return (
            <ul>
                {this.suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )

    }

    render() {
        return (
            <div>
                <input onChange={this.onTextChanged} type="text"/>
                {this.renderSuggestion}
            </div>
        )
    }
}