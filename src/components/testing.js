import React from 'react';

// "https://type.fit/api/quotes"

export default class Testing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes").then(item => item.json()).then(data => {
            const current_index = Math.floor(Math.random() * data.length);
            this.setState(
                {quote: data[current_index].text, author: data[current_index].author.split(",")[0]}
            );
        });
    }

    handleClick() {
        fetch("https://type.fit/api/quotes").then(item => item.json()).then(data => {
            const current_index = Math.floor(Math.random() * data.length);
            this.setState(
                {quote: data[current_index].text, author: data[current_index].author.split(",")[0]}
            );
        });
    }

    render() {
        return (
            <div>
               <p>The quote: {this.state.quote}</p>
               <p>The author: {this.state.author}</p>
               <button onClick={this.handleClick}>New Quote</button>
            </div>
        );
    }
}