import { connect } from 'react-redux';
import NavBar from './NavBar';

    
//     let state = props.store.getState();

//     return <NavBar sidebar={state.sidebarPage.sidebar} />
// };

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarPage.sidebar
    }
};

let mapDispatchToProps = () => {
    return {

    }
};

const NavBarContainer = connect (mapStateToProps, mapDispatchToProps) (NavBar);


export default NavBarContainer