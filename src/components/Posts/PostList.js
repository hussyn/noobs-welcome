import React, { Component } from 'react';
import Post from './Post';
import { withFirebase } from '../Firebase';

class PostList extends Component {
    state = {
        posts:[]
    }
    componentDidMount() {
        this.onListenForMessages();
    }

    onListenForMessages = () => {
        this.setState({ loading: true });
        this.unsubscribe = this.props.firebase
        .posts()
        .onSnapshot(snapshot => {
            if (snapshot.size) {
            let posts = [];
            snapshot.forEach(doc =>
                posts.push({ ...doc.data(), uid: doc.id }),
            );

            this.setState({
                posts: posts,
                loading: false
            });
            } else {
            this.setState({ posts: null, loading: false });
            }
        });
    };

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
     
            <div>
                {this.state.posts.map((post) => (
                    <Post key={post.uid} post={post} />
                ))}
            </div>
        );
    }
}

export default withFirebase(PostList);
