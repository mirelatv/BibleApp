import { connect } from 'react-redux' 
// import { bindActionCreators } from 'redux'
import SimpleSlider from '../components/SimpleSlider'

const mapStateToProps = (state) => ({
  movies: state.cartelera,
  
})

export default connect(mapStateToProps, null)(SimpleSlider)