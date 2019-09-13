import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import QuestionSign from "../assets/images/vopros.png";
import ButtonImg from "../assets/images/main_btn.gif";
import {withStyles} from "@material-ui/styles";

const styles = () => ({
    root: {
        flexGrow: 1
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
    main: {
        display: "flex",
        padding: 16,
        textAlign: 'center',
        color: "#000",
        background: "#e1e2e6",
        marginTop: 5,
        flexDirection: "column"
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
        fontWeight: 500,
        fontSize: 54,
        position: "relative",
        paddingRight: 100
    },
    image: {
        position: "absolute",
        top: -23,
        right: 0,
        height: 109
    },
    text_div: {
        textAlign: "left"
    },
    btn_gif: {
        width: "50%",
        cursor: "pointer"
    }
});

class FullWidthGrid extends Component {

    state = {
        data: null
    };

    componentDidMount() {
        const csvFilePath = require("../assets/links .csv");
        const Papa = require("papaparse/papaparse.min.js");
        Papa.parse(csvFilePath, {
            download: true,
            skipEmptyLines: true,
            complete: this.updateData
        });
    }

    updateData = result => {
        const rand = Math.round(0.5 + Math.random() * 3948);
        if (result.data) {
            const data = result.data;
            this.setState({data});
            const element = data[rand];
            const link = element[1];
            !link && this.updateData(this.state.data);
            window.open(link, '_blank');
        } else {
            if (result) {
                const element = result[rand];
                const link = element[1];
                !link && this.updateData(this.state.data);
                window.open(link, '_blank');
            } else {
                console.log("no result", result)
            }
        }
    };

    handler = link => {
        alert("Создайте аккаунт в соц сетях")
    };

    clickHandler = () => {

    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>Left side bar</Paper>
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
                        <Paper className={classes.main}>
                            <div className={classes.text_div}>
                                <p>
                                    Извечный вопрос – «Что делать?».
                                    <br/>
                                    Порой мы не знаем чем занять несколько свободных минут или часов. А для кого-то этот
                                    вопрос стоит еще более глобально, в масштабах всей жизни. Предлагаем вам
                                    воспользоваться
                                    нашим сервисом, где в один клик вы будете перенаправлены на случайный материал в
                                    интернете. Мы постарались отобрать только полезные и познавательные статьи, видео и
                                    т.д., чтобы вы могли с пользой провести свободное время. В жизни часто бывает и так,
                                    что
                                    мы не знаем что делать в определённой ситуации. Удивительно, но по воле случая,
                                    людям
                                    иногда попадается именно та информация, которая им нужна на данный момент. Добро
                                    пожаловать на наш сервис, надеемся, он будет для вас полезным. Просто кликните на
                                    кнопку!
                                </p>
                            </div>
                            <div className={classes.button_div}>
                                <img src={ButtonImg} alt="main button" className={classes.btn_gif}
                                     onClick={() => this.updateData(this.state.data)}/>
                            </div>
                        </Paper>
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
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>Right side bar</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(FullWidthGrid);
