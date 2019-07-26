import React, { Component } from 'react';

export class NewPostForm extends Component {

    state = {
        story: ""
    }

    render() {
        return (
            <form className="bg-white border border-gray-400  rounded px-8 pt-2 pb-2 mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="story"
                >
                    New Post
                </label>

                <textarea
                    className="shadow appearance-none border rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="What's on your mind?!"
                    id="story"
                    maxLength="2000"
                    name="story"
                    onChange={this.handleChange}
                    value={this.state.story}
                />

                <div className="flex items-center justify-between mt-2">
                    <p
                        className="inline-block align-baseline font-bold text-sm text-blue-500"
                        href="#"
                    >
                        10000 Character Limit
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={!this.state.story}
                        onClick={this.addStory}
                    >
                        Post
                    </button>
                </div>
            </form>
        );
    }

    addStory = (event) => {
        event.preventDefault();
        console.log(this.state.story);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}
