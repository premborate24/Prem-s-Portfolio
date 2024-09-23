import React from "react";
import './profile.css';
import profiles from '../assets/images/profiles.jpg'

function Profile() {
   

    return (
        <div className="profile-container">
            <div className="backcircle">
                <img src={profiles} alt="Profile Image" className="profile-image" />
            </div>
            <div className="profile-text">
                <h2 className="h2" >Prem Borate</h2>
                <p className="chill-text">
                       I do Code, Design &   
                    <span className="gradient-text"> Chill</span> 🍿
                </p>
                <p className="descript">
                    Passionate Front-end Engineer with a focus on React development dedicated to crafting elegant and user-friendly web applications.
                </p>
            </div>
        </div>
    );
}

export default Profile;
