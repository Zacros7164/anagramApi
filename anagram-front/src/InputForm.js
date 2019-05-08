import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class InputForm extends Component {

    constructor() {
        super()
        this.state = {
            message: `Enter 2 words to test if they are anagrams`
        }
    }


    anagramTest = (event)=>{
        event.preventDefault();
        const word1 = document.getElementById("word1").value;
        const word2 = document.getElementById("word2").value;
        this.setState({
            message: 'Checking...'
        })
        axios({
            method: "POST",
            url: 'http://localhost:3000/anagramTest',
            data: {
                word1,
                word2
            }
        }).then((response)=>{
            if(response.data.results === true){
                this.setState({
                    message: `Yes they are anagrams`
                })
            }else{
                this.setState({
                    message: `No, they are not anagrams`
                })
            }
        })
    }

    render() {



        return (
            <div>
                <div>
                    <form onSubmit={this.anagramTest}>
                        <input type="text" id="word1" placeholder="Enter the first word" />
                        <input type="text" id="word2" placeholder="Enter the second word" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    {this.state.message}
                </div>
            </div>
        )
    }
};


export default InputForm;