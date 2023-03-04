import { connect } from 'react-redux';
import Music from './Music';


// const MusicContainerf = (props) => {

// let state = props.store.getState()

//     return <Music musics={state.musicPage.musics} />
// };

let mapStateToProps = (state) => {
    return {
        musics: state.musicPage.musics
    }
};

let mapDispatchToProps = () => {
    return {

    }
};

const MusicContainer = connect (mapStateToProps, mapDispatchToProps) (Music);

export default MusicContainer