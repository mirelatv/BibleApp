import { connect } from 'react-redux' 
// import { bindActionCreators } from 'redux'
import SimpleSlider from '../components/SimpleSlider'

const mapStateToProps = (state) => ({
  movies: state.datamovies[state.info.activeTab],
  
})

export default connect(mapStateToProps, null)(SimpleSlider)
