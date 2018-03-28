import { connect } from 'react-redux';
//  import { bindActionCreators } from 'redux'
// import Movies from '../components/MainBody';
// import { changeTab } from '../action'
import Movies from '../components/Movies'


const mapStateToProps = (state) => ({
  datamovies: state.datamovies,
  activeTab: state.info.activeTab
})





export default connect(mapStateToProps, null)(Movies)