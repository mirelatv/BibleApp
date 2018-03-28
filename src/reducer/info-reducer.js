import { actionTypes } from '../action'

const initialInfo = {
  activeTab: 'cartelera',
  setActiveTab:'estrenos'
}

export default function (state = initialInfo, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TAB:
      return {...state, activeTab: action.tab}
    default:
      return {...state, setActiveTab: action.tab}
      {console.log(state)}
  }
}

