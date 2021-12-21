import React,{useState} from 'react';
import Layout from '../Layout/Layout';
import Profile from './Profile';
import Plan from './Plan';
import Billing from './Billing';
import Navbar from "../nav/Navbar";
import "../scss/my-account.scss";

const MyAccount = (props) => {
    const userLogInData = props.userData;
    const [tabState, setTabState] = useState(1);

    const toggleTab = (index) => {
        setTabState(index);
    }

    const addActiveClass = (index,className) => tabState === index ? className : ''
    return (
        <>
            <Navbar title="My Account" loginStatus={props.loginStatus} />
            <Layout className="video__container">
                <ul className = "account-menu">
                    <li className={`tab ${addActiveClass(1,'active-tab')}`} onClick={()=>toggleTab(1)}>Profile</li>
                    <li className={`tab ${addActiveClass(2,'active-tab')}`} onClick={()=>toggleTab(2)}>My Plan</li>
                    <li className={`tab ${addActiveClass(3,'active-tab')}`} onClick={()=>toggleTab(3)}>Billing</li>
                </ul>
                <div className="tab-content__container">
                    <div className={`tab-content ${addActiveClass(1,'active-content')}`}>
                        <Profile userLoginInfo = {userLogInData}/>
                    </div>
                    <div className={`tab-content ${addActiveClass(2,'active-content')}`}>
                        <Plan userLoginInfo = {userLogInData} />
                    </div>
                    <div className={`tab-content ${addActiveClass(3,'active-content')}`}>
                        <Billing userLoginInfo = {userLogInData} />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default MyAccount;