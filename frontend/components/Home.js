import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../assets/stylesheets/home.scss';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div class="main-page">
                <Navbar />
                <div className="home">
                    <div className="center-info">
                    <img src="/img/logo1x.png"/>
                    <h1>Doorstep</h1>
                    <h4><Link className="communities-link" to="/communities">Explore Communities</Link></h4>
                    </div>
                </div>
                <div className="about">
                    <h1>About us</h1>
                    <p>One person's doorstep is another person's treasures. Reduce waste of food,
                    clothing, and any items not necessary to you anymore and give to those you wish to 
                    share with. Build communities, give and get items, eliminate wastefulness. One requirement,
                    everything is free.</p>
                </div>
                <div className="footer">
                    <h3>Horizons Hackathon 2017</h3>
                    <p className="footer-info">Created by Demilade Adeboye, Minh To, and Teresa Liu</p>
                    <p> &copy; Squad 2017 </p>
                </div>
            </div>
        );
    }
}

export default Home;
