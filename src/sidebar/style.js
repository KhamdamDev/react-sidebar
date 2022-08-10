import styled from "styled-components";
const Sidebarmini = styled.div`
    width: 5%;
    height: 100vh;
    background: #205189FF;
    padding: 18px 20px;
    .logo-img{
        cursor: pointer;
    }
    .icons{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 103px;
        margin-left: 15px;

        .fa-solid{
            color: white;
            font-size: 20px;
            margin-bottom: 50px;
            position: relative;
            cursor: pointer;
            :hover{
                color: yellowgreen;
                transform: scale(1);
            }
        }
        .fa-house{
           :hover{
               ::after{
                    content: 'Main';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 50px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-size: 12px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-code{
            .itcourse{
                width: 300px;
                height: 200px;
                display: flex;
                flex-direction:column;
                justify-content:space-between;
                background: #205189FF;
                position: absolute;
                left: 60px;
                top: 0px;
                padding: 10px 20px;
                border-left: 3px solid yellowgreen;
                z-index: 999;
                h2{
                    font-size: 20px;
                    height: 35px;
                    padding: 5px;
                    transition: 0.5s;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                    :hover{
                        border: 1px solid white;
                        height: 35px;
                        padding-left: 10px;
                        color: yellowgreen;
                        transition: 0.5s;
                    }
                }
                :hover{
                    transform: scale(1);
                }
            }
            :hover{
                .itcourse{
                    transform: scale(1);
                    h2{
                        font-size: 20px;
                        color: white;
                        transform: scale(1);
                    }
                }
            } 
           :hover{
               ::after{
                    content: 'Available IT Courses';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 124px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -50px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-chart-line{
           :hover{
               ::after{
                    content: 'Statistics';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 60px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-people-roof{
           :hover{
               ::after{
                    content: 'HR Management';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 100px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-desktop{
            :hover{
               ::after{
                    content: 'Monitoring';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 70px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-comments{
            :hover{
               ::after{
                    content: 'Contact With Us';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 100px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-location-dot{
            :hover{
               ::after{
                    content: 'Location';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 60px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           } 
        }
        .fa-gear{
            :hover{
               ::after{
                    content: 'Settings';
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                    width: 55px;
                    font-size: 12px;
                    height: 25px;
                    border: 1px solid yellowgreen;
                    border-radius: 10px;
                    color: white;
                    text-transform: capitalize;
                    transition: 5s;
                    left: 40px;
                    top: -20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
           }  
        }
    }
`
const SidebarCon = styled.div`
    width: 20%;
    min-height: 100vh;
    background: #205189FF;
    .logo{
        padding: 10px 20px;
        display: flex;
        align-items: center;
    }
    .logo-img{
        cursor: pointer;
    }
    .icons{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 70px;
        margin-left: 15px;
        overflow-y: auto;
        .fa-solid{
            color: white;
            font-size: 20px;
        }
        .menu-items{
            padding-left: 20px;
            width: 345px;
            height: 60px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            transition: 0.5s;
            cursor: pointer;
            :hover{
                transition: 0.5s;
                border: 1px solid whitesmoke;
                margin-left: 7px;
            }
            :hover h3{
                color: yellowgreen;
            }
            :hover .fa-solid{
                color: yellowgreen;
            }
            h3{
                margin-left: 40px;
                color: white;
                font-size: 20px;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

            }
            .hr-management{
                width: 80%;
                height: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                :hover{
                    border: none;
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .hr-submenu{
            margin-left: 70px;
            div{
                width: 235px;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: 0.5s;
                margin-bottom: 10px;
                padding-left: 20px;
                cursor: pointer;
                :hover{
                    transition: 0.5s;
                    border: 1px solid whitesmoke;
                    margin-left: 7px;
                }
                :hover h4{
                color: yellowgreen;
                }
                :hover .fa-solid{
                    color: yellowgreen;
                }
                h4{
                    color: white;
                    font-size: 20px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
            }
        }
        .it-course{
            div{
                h4{
                    font-size: 16px;
                }
            }
        }
    }
    
`

export {Sidebarmini, SidebarCon}