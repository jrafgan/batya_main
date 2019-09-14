import React, {Component} from 'react';
import './App.css';
import Contact from "./containers/Contact";
import {Link, Route, Switch} from "react-router-dom";
import Main from "./containers/Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import QuestionSign from "./assets/images/vopros.png";
import {withStyles} from "@material-ui/styles";

const styles = () => ({
    root: {
        flexGrow: 1,
        alignItems: 'stretch'
    },
    paper: {
        display: "flex",
        padding: 16,
        textAlign: 'center',
        color: "#000",
        background: "#e1e2e6",
        marginTop: 5,
        justifyContent: "space-between"
    },
    grid: {
        display: 'flex',
        alignItems: 'stretch'
    },
    menu_div: {
        display: "grid",
        gridTemplateRows: 'auto auto'
    },
    link: {
        display: "block",
        textDecoration: "none"
    },
    link1: {
        display: "flex",
        textDecoration: "none",
        marginBottom: 10,
        justifyContent: 'start'
    },
    title: {
        display: "inline-flex",
        textShadow: "3px 3px 2px rgba(150, 150, 150, 1)",
        fontWeight: 700,
        fontSize: 54,
        position: "relative",
        paddingRight: 100,
        fontFamily: 'Caveat, cursive'
    },
    image: {
        position: "absolute",
        top: -18,
        right: 0,
        height: 109
    },
    "@media (max-width: 959px)": {
        image: {
            top: 20
        },
        link: {
            textAlign: 'left'
        },
        link1: {
            marginBottom: 0,
            paddingTop: 30
        }
    },
    "@media (max-width: 733px)": {
        image: {
            right: 26
        }
    },
    "@media (max-width: 599px)": {
        link1: {
            marginBottom: 10,
            paddingTop: 0,
            paddingLeft: 16
        },
        link: {
            paddingLeft: 16
        },
        image: {
            top: -18
        },
        paper: {
            width: '100%',
            padding: '16px 0'
        }
    },
    "@media (max-width: 500px)": {
        paper: {
            flexDirection: 'column',
            textAlign: 'center'
        },
        menu_div: {
            textAlign: 'center'
        },
        title: {
            justifyContent: 'center'
        }
    },
    "@media (max-width: 341px)": {
        image: {
            top: 20
        }
    }
});

class App extends Component {

    componentDidMount() {

        const script = document.createElement("script");

        script.src = "//usocial.pro/usocial/usocial.js?v=6.1.4";
        script.async = true;
        script["data-script"] = "usocial";

        const node = document.getElementById("icon_div");
        node.prepend(script);
    }

    handler = () => {
        alert("Создайте аккаунт в соц сетях")
    };

    render() {
        const {classes} = this.props;
        return (
            <div className="App">
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={3} md={2} className={classes.grid} >
                            <Paper className={classes.paper}>
                                <div className="sidebar_text">Здесь может быть ваша реклама</div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Paper className={classes.paper}>
                                <div className={classes.menu_div}>
                                    <Link className={classes.link1} to="/">Главная</Link>
                                    <Link className={classes.link} to="/contact_us">Обратная связь</Link>
                                </div>
                                <div className={classes.title}>
                                    Что делать
                                    <img src={QuestionSign} alt="question sign" className={classes.image}/>
                                </div>
                            </Paper>

                            <Switch>
                                <Route path="/" exact component={Main}/>
                                <Route path="/contact_us" exact component={Contact}/>
                            </Switch>

                            <Paper className={classes.paper}>
                                <div className="footer">
                                    <div className="footer_text">
                                        <p>Если Вам понравился наш сайт,</p>
                                        <p>поделитесь информацией о нас в соц. сетях:</p>
                                    </div>
                                    <div className="icon_div" id="icon_div">
                                        <div className="uSocial-Share" data-pid="c70c8fbc57456afe47984205e0ebe497"
                                             data-type="share"
                                             data-options="round-rect,style1,default,absolute,horizontal,size24,eachCounter0,counter0,upArrow-left"
                                             data-social="vk,fb,twi,mail,lin,ok,pinterest"
                                             data-mobile="vi,wa,sms" />
                                    </div>
                                    <div className="footer_bottom">
                                        <p>По вопросам размещения рекламы обращайтесь на: diesel.1985@mial.ru</p>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2} className={classes.grid}>
                            <Paper className={classes.paper}>
                                <div className="sidebar_text">Здесь может быть ваша реклама</div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(App);
