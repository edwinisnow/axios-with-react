import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }

        this.textInput = React.createRef()
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    onChangeHandler(event) {
        this.setState({ title: event.target.value })
    }

    focusTextInput() {
        this.textInput.current.focus()
    }

    componentDidMount() {
        this.focusTextInput()
    }

    render() {
        const title = this.state.title;
        return (
            <div>
                <h1>What's in your mind today ? </h1>
                <form onSubmit={(e) => this.props.onSubmitHandler(title, e)}>
                    <label>I'll need to
                        &nbsp;<input type='text' value={title}
                            ref={this.textInput}
                            onChange={this.onChangeHandler} /></label>&nbsp;
                    <input type='submit' value='Add' />
                </form>
            </div>
        )
    }
}
export default TodoForm;