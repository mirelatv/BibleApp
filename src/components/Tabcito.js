import React from 'react'

const Tabcito = ({activeTab,setActiveTab}) => (
  <div className="row tabs">
  {console.log(activeTab)}
  {console.log(setActiveTab)}
     <ul className="nav nav-pills" role="" aria-label="">
     <li className="nav-item">
      <a id="cartelera"
        className={activeTab === 'cartelera' ? 'nav-link py-1 active' : 'nav-link py-1'}
        data-toggle="tab" role="tab"
         onClick={(e) => {
           e.preventDefault()
           setActiveTab('cartelera')
          }}
         className="btn btn-outline-danger">En Cartelera
      </a>
      </li>
      <li className="nav-item">
      <a id="estrenos"
        className={activeTab ==='estrenos' ? 'nav-link py-1 active' : 'nav-link py-1'}
        data-toggle="tab" role="tab"
         onClick={(e) => {
          e.preventDefault() 
          setActiveTab('estrenos')}}
         className="btn btn-outline-danger">Próximos estrenos
      </a>
      </li>
    </ul> 
  </div>
)


export default Tabcito;
// import React from 'react';
// import { render } from 'react-dom';
// import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

// const CustomTab = ({ children }) => (
//   <Tab>
//     <h1>{children}</h1>
//   </Tab>
// );

// CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab

// const Tabcito = ({ setActiveTab }) => (
//   <Tabs>
//     <TabList>
//       <CustomTab
//         onClick={(e) => {
//           e.preventDefault()
//           setActiveTab('cartelera')
//         }}
//         className="btn btn-outline-danger">En Cartelera</CustomTab>
//       <CustomTab
//         data-toggle="tab" role="tab"
//         onClick={() => setActiveTab('estrenos')}
//         className="btn btn-outline-danger">Próximos estrenos 2</CustomTab>
//     </TabList>
//     <TabPanel>Panel 1</TabPanel>
//     <TabPanel>Panel 2</TabPanel>
//   </Tabs>
// );

// export default Tabcito
