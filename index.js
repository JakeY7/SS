import '@babel/polyfill'
// React imports
import * as React from 'react'
import { render } from 'react-dom'

// app specific imports
import { history } from './services'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSaga from './sagas'
import {Provider} from "react-redux";

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

render(
    <Provider store={store}>
<App/>

    </Provider>,
  document.getElementById('root')
)
//  <Drawer
//                     className={classes.drawer}
//                     variant="persistent"
//                     anchor="right"
//                     open={open}
//                     classes={{
//                         paper: classes.drawerPaper,
//                     }}
//                     style={{height:'100%'}}
//                 >
//                     <header style={{height:'30px',background:'red'}}>Session Chat</header>
//                     <main style={{ height:`calc(100% - 70px)`,}}>

//                         <div style={{background:'rgb(136, 232, 234)',height:'70px',border:'1px solid red',width:'100%',padding:'10px'}}>



//                                 <List   dense={true} style={{background:'yellow',lineHeight:'15px',height:'50px',width:'100%',padding:'0'}}>
//                                     <ListItem  style={{height:'15px',width:'100%',background:'red',marginBottom:"5px",padding:0}}>
//                                     <ListItemText primary='Dwedge'/>
//                                     <ListItemSecondaryAction style={{fontSize:'10px'}} dense={true}>
//                                         May23,2017 1:20 PM

//                                     </ListItemSecondaryAction>



//                                 </ListItem>
//                                     <div style={{overflow:'hidden',height:'30px',lineHeight:'15px',width:'100%',background:'yellow',paddingBottom:'5px',overflowWrap:'break-word'}}>

//                                         hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha

//                                     </div>

//                                 </List>

//                         </div>

//                     </main>
//                     <footer style={{height:'40px',background:'red',padding:'10px 0 10px 10px',}}>
//                         <input style={{width:'78%'}}/><button style={{marginLeft:'10px'}}>BU</button>
//                   </footer>
//                 </Drawer>
