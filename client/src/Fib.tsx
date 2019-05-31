import React, { Component, FormEvent } from 'react'
import axios from "axios";

interface IProps { }

interface IState {
    seenIndexes: number[] | any,
    values: [],
    index: string
}

type UserData<T = string, A = number> = { username: T, points: A };

class Fib extends Component<IProps, IState> {
    state: IState = {
        seenIndexes: [],
        values: [],
        index: ""
    }

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    fetchValues = async (): Promise<UserData> => {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });
        return { username: "ozan", points: 2 };
    }

    fetchIndexes = async () => {
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({
            seenIndexes: seenIndexes.data
        });
    }

    renderSeendIndexes = (): string => {
        return this.state.seenIndexes.map(({ number }: {number: number}) => number).join(', ');
    }

    renderValues = (): any[] => {
        const entries = [];
        for(let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For index {key} I calculated {this.state.values[key]}
                </div>
            )
        }

        return entries;
    }

    handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await axios.post('/api/values', {
            index: this.state.index
        });
        this.setState({index: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your index </label>
                    <input 
                        value={this.state.index}
                        onChange={event => this.setState({index: event.target.value})}
                    />
                    <button>Submit</button>
                </form>

                <h3>Indexes I have seend: </h3>
                {this.renderSeendIndexes()}
                
                <h3>Calculated Values: </h3>
                {this.renderValues()}
            </div>
        )
    }
}

export default Fib;