import Introduction from "./../components/intro/intro"
import WhatIDo from "./../components/whatIDo/whatIDo"
import WhoAmI from "./../components/whoAmI/whoAmI"
import MyWork from "./../components/myWork/myWork"
import Footer from "./../components/footer/footer"
import GotoTop from "./../components/gotoTop/gotoTop"

function Home(props){
    return(
        <>
            <Introduction name={props.name.intro} />
            <WhatIDo  name={props.name.services}/>
            <WhoAmI name={props.name.whoAmI}/>
            <MyWork name={props.name.MyWork}/>
            <GotoTop />        
        </>
    )
}
export default Home;