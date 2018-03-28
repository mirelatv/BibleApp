
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { changeTab } from '../action'
import Tabcito from '../components/Tabcito'

const mapStateToProps = (state) => ({
  activeTab: state.info.activeTab
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActiveTab: changeTab
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Tabcito)