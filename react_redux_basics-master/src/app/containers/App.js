import React from 'react';
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import {setName} from "../actions/userActions";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }

    changeUsername(newName) {
        
    }

    componentDidMount() {
        fetch("http://localhost:8081/listUsers")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    

    render() {
       const { items } = this.state;
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("BABURAJAN")}/>
                <User username={this.props.user.name}/>



                <ul>
                 {
                    // this.state.items.map(item => (
                     items.map((item, key) =>
                     <li key={item.id}>{item.name}</li>
                 )
                 }
                 </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
	return {
		user: state.user,
		math: state.math
	};
};

const mapDispathToProps = (dispatch) =>{
	return {
		setName : (name) => {
			dispatch(setName(name))
		}
	};
};

export default connect(mapStateToProps, mapDispathToProps)(App)
