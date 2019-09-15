import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
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
    text_div: {
        textAlign: "left",
        width: 400
    },
    button: {
        margin: '20px auto',
        background: 'rgb(85, 26, 139);'
    },
    // "@media (min-width: 960px)": {
    //     button_div: {
    //         marginBottom: 80
    //     }
    // }
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
        const data = result.data;
        this.setState({data}, console.log(this.state.data));
    };

    getLink = () => {
        const rand = Math.round(0.5 + Math.random() * 3949);
        const element = this.state.data[rand];
        const link = element[1];
        if (link === '') {
            return this.getLink()
        }
        window.open(link, '_blank');
        console.log(typeof link, link);
    };

    render() {
        const {classes} = this.props;
        return (
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
                    <Button
                        onClick={this.getLink}
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                    >
                        Вперед
                    </Button>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(FullWidthGrid);
