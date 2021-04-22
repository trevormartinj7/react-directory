import React, {Component} from 'react'
import data from './data'


class User extends Component{

    constructor(props){
        super(props);
        this.state={
            placeholder: "Imported user succesfully",
            id: "",
            city: "Huh"

        }




    }

    componentDidMount(){

    }
    


    render(){
        return(
            <div className="userBox">
                <div className="numUser">
                    {this.props.dataUser.id}/25
                </div>
                <div class="user-details">
                    <div className="user-name">
                    <h1>{this.props.dataUser.name.first} {this.props.dataUser.name.last}</h1>
                        
                    </div>
                    <div class="basic-info">
                        <h2><b>From: </b><em>{this.props.dataUser.country}</em></h2>
                        <h2><b>Job Title: </b> <em>{this.props.dataUser.title}</em></h2>
                        <h2><b>Employer: </b> <em>{this.props.dataUser.employer}</em></h2>
                    </div>
                    <div className="fav-movies">
                        <h2>Favorite Movies:</h2>
                        <div className="list">
                            <ol>
                                <li>{this.props.dataUser.favoriteMovies[0]}</li>
                                <li>{this.props.dataUser.favoriteMovies[1]}</li>
                                <li>{this.props.dataUser.favoriteMovies[2]}</li>
                            </ol>
                        </div>
                       

                    </div>
                    
                    
                </div>

            </div>

        )
    }

}

export default User