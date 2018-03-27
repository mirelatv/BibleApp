import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import Movies from '../components/MainBody';

const mapStateToProps = (state) => ({
  datamovies: state.datamovies,
  
})

export default connect(mapStateToProps, null)(Movies)