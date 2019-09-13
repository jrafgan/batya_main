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
        display: "inline-flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "fit-content"
    },
    link: {
        display: "block",
        textDecoration: "none"
    },
    link1: {
        display: "flex",
        textDecoration: "none",
        marginBottom: 10
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
    }
});

class App extends Component {

    handler = link => {
        alert("Создайте аккаунт в соц сетях")
    };

    render() {
        const {classes} = this.props;
        return (
            <div className="App">
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={2} className={classes.grid}>
                            <Paper className={classes.paper}>Здесь может быть ваша реклама</Paper>
                        </Grid>
                        <Grid item xs={12} sm={8}>
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
                                    <div className="icon_div">
                                        <div className="icon icon_vk" onClick={this.handler}/>
                                        <div className="icon icon_fb" onClick={this.handler}/>
                                        <div className="icon icon_tw" onClick={this.handler}/>
                                        <div className="icon icon_gplus" onClick={this.handler}/>
                                        <div className="icon icon_ok" onClick={this.handler}/>
                                        <div className="icon icon_in" onClick={this.handler}/>
                                    </div>
                                    <div className="footer_bottom">
                                        <p>По вопросам размещения рекламы обращайтесь на: diesel.1985@mial.ru</p>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={2} className={classes.grid}>
                            <Paper className={classes.paper}>Здесь может быть ваша реклама</Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(App);
