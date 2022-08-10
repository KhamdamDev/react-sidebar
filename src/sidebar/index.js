import { Component } from "react";
import { Sidebarmini,SidebarCon } from "./style";
import img01 from '../img/001.jpg'
import img02 from '../img/002.jpg'
class Sidebar extends Component{
    state = {
        dropdown: true,
        down: true,
        itdrop:true,
        itcourse: true,
    }
    render(){
        return(
            <div>
                 {this.state.dropdown ?(
                     <Sidebarmini>
                        <img className="logo-img" width={50} src={img01} onClick={()=> this.setState({dropdown: false})} />
                        <div className="icons">
                            <i class="fa-solid fa-house"></i>
                            <i class="fa-solid fa-code" onClick={()=>this.setState({itcourse: !this.state.itcourse})}>
                                {this.state.itcourse ? <></>
                                :<div className="itcourse">
                                    <h2>Full Stack Web Developer</h2>    
                                    <h2>Frontend Web Developer</h2>    
                                    <h2>Internship</h2>    
                                    <h2>Mobile: Android | Flutter</h2>    
                                    <h2>Frontend Bootcamp</h2>    
                                </div>}
                            </i>
                            <i class="fa-solid fa-chart-line"></i>
                            <i class="fa-solid fa-people-roof"></i>
                            <i class="fa-solid fa-desktop"></i>
                            <i class="fa-solid fa-comments"></i>
                            <i class="fa-solid fa-location-dot"></i>
                            <i class="fa-solid fa-gear"></i>
                        </div>
                     </Sidebarmini>)
                     :(<SidebarCon>
                        <div className="logo">
                            <img className="logo-img" width={50} src={img01} onClick={()=> this.setState({dropdown: true})} />
                            <img width={200} src={img02} />
                        </div>
                        <div className="icons">
                            <div className="menu-items">
                                <i class="fa-solid fa-house"></i>
                                <h3>Main</h3>
                            </div>
                            <div className="menu-items" onClick={()=> this.setState({itdrop:!this.state.itdrop})}>
                                <i class="fa-solid fa-code"></i>
                                <div className="hr-management" >
                                    <h3>Available IT Courses</h3>
                                    {this.state.itdrop ? <i class="fa-solid fa-caret-down"></i> : <i class="fa-solid fa-caret-up"></i>}
                                </div>

                            </div>
                            {!this.state.itdrop ? 
                            <div className="hr-submenu it-course">
                                <div>
                                    <h4>Full Stack Web Developer</h4>
                                </div>
                                <div>
                                    <h4>Frontend Web Developer</h4>
                                </div>
                                <div>
                                    <h4>Internship</h4>
                                </div>
                                <div>
                                    <h4>Mobile: Android | Flutter</h4>
                                </div>
                                <div>
                                    <h4>Frontend Bootcamp</h4>
                                </div>
                            </div>
                            :<></>}
                            <div className="menu-items">
                                <i class="fa-solid fa-chart-line"></i>
                                <h3>Statistics</h3>
                            </div>
                            <div className="menu-items" onClick={()=> this.setState({down:!this.state.down})}>
                                <i class="fa-solid fa-people-roof"></i>
                                <div className="hr-management" >
                                    <h3>HR Management</h3>
                                    {this.state.down ? <i class="fa-solid fa-caret-down"></i> : <i class="fa-solid fa-caret-up"></i>}
                                </div>
                            </div>
                            {!this.state.down ? 
                            <div className="hr-submenu">
                                <div>
                                    <h4>Mentors</h4>
                                    <i class="fa-solid fa-caret-down"></i>
                                </div>
                                <div>
                                    <h4>Employee</h4>
                                    <i class="fa-solid fa-caret-down"></i>
                                </div>
                                <div>
                                    <h4>Teams</h4>
                                    <i class="fa-solid fa-caret-down"></i>
                                </div>
                            </div>
                            :<></>}
                            <div className="menu-items">
                                <i class="fa-solid fa-desktop"></i>
                                <h3>Monitoring</h3>
                            </div>
                            <div className="menu-items">
                                <i class="fa-solid fa-comments"></i>
                                <h3>Contact With Us</h3>
                            </div>
                            <div className="menu-items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h3>Our Location</h3>
                            </div>
                            <div className="menu-items">
                                <i class="fa-solid fa-gear"></i>
                                <h3>Settings</h3>
                            </div>
                        </div>
                     </SidebarCon>)  }
            </div>
          
        )
    }
}
export default Sidebar