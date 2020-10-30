import React from 'react';

// import logo image
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

// import styled components file

import {
    StyledHeader,
    StyledRMDBLogo,
    StyledTMDBLogo
} from '../styles/StyledHeader';

const Header = () => {
    return (
        <StyledHeader>
            <div className="header-content">

                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
                <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />

            </div>
        </StyledHeader>
    )
}

export default Header;