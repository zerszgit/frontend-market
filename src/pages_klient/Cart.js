import React from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

const PersonalAreaMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[700px] px-10 py-10 borderr cardsss">
                <img src="images/Group 59.png" alt=""/>
        </div>
    );
};


const ProfileSettings = () => {
    return (
        <div className="cardsss px-10 py-10">
            <img src="images/Group 58.png" alt=""/>
        </div>
    );
};




const PersonalAreaPage = () => {
    return (
        <>
            <Header/>
            <div className='flex '>
                <ProfileSettings/>
                <PersonalAreaMenu />
            </div>
        </>
    );
};

export default PersonalAreaPage;
