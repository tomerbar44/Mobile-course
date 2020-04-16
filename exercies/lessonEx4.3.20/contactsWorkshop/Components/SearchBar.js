import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
        console.log("check");

        const url=`https://pixabay.com/api/?key=16010070-61ae78d69d027ee701c67fec8&q=${this.state.search}&image_type=photo&pretty=true`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json => {
        //    console.log(json);
        })
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}
                lightTheme='true'
                containerStyle={{ backgroundColor: '#DCDDDD' }}
                inputContainerStyle={{ backgroundColor: '#FFFFFF' }}
            />
        );
    }
}

// updatePost = (id, title) => {
//     fetch(`https://pixabay.com/api/?key=16010070-61ae78d69d027ee701c67fec8&q=${this.state.search}&image_type=photo&pretty=true`, {
//         method: 'GET',
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     }).then(response => response.json())
//     let index = this.state.posts.findIndex(post => post.id == id);
//     this.state.posts[index].title = title;
//     this.setState({
//         showEdit: false,
//         posts: this.state.posts
//     })
// }

// fetch('https://pixabay.com/api/?key=16010070-61ae78d69d027ee701c67fec8&q=${this.state.search}&image_type=photo&pretty=true')
//             .then(response => response.json())
//             .then(json => {
//                 this.setState({
//                     posts: json.slice(0, 6) // get only first 6 items
//                 })
//             })

        // async function initCompanies () {
        //     try {
        //       const res = await fetch('https://pixabay.com/api/?key=16010070-61ae78d69d027ee701c67fec8&q=${this.state.search}&image_type=photo&pretty=true').then(res => res.json());
        //       console.log(res.total);
        //     //   if (res.status == 200 && res.data != null) {
        //     //     setCompanies(res.data);
        //     //     sendData(res.data[0].name); // the first tab is selected
        //     //   }
        //     } catch (e) {
        //       // if fetch fail, reload and try again
        //       alert('something went work, page refreshing...');
        //       setInterval(() => {
        //         window.location.reload();
        //       }, 4000);
        //     }
        //   }
        // initCompanies () ;