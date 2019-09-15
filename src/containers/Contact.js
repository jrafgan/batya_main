import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Notification from "../components/Notification";
import {reasons} from "../assets/constants";

const styles = () => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: 300,
        margin: '20px auto 0',
        border: '1px solid',
        borderRadius: 5,
        background: '#fff'
    },
    textField: {
        marginLeft: 8,
        marginRight: 8,
        width: 280
    },
    textArea: {
        marginLeft: 8,
        marginRight: 8,
        width: 280
    },
    button: {
        margin: '20px auto',
        background: 'rgb(85, 26, 139);'
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
    label: {
        marginLeft: 8
    },
    "@media (max-width: 730px)": {
        container: {
            width: 280
        },
        textField: {
            width: 263
        },
        textArea: {
            width: 257,
            marginTop: 5
        }
    },
    "@media (max-width: 650px)": {
        container: {
            width: 263
        },
        textField: {
            width: 243
        },
        textArea: {
            width: 237,
            marginTop: 5
        }
    },
    "@media (max-width: 370px)": {
        container: {
            width: 280
        },
        textField: {
            width: 263
        },
        textArea: {
            width: 257,
            marginTop: 5
        }
    }
});

class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        reason: '',
        link: '',
        response: '',
        variant: ''
    };

    submitHandler = e => {
        e.preventDefault();
        const templateId = 'template_SqQFU8Lf';

        this.sendFeedback(templateId, {
            message_html: `Причина: ${this.state.reason} URL: ${this.state.link} Сообщение: ${this.state.message}`,
            from_name: this.state.name,
            reply_to: this.state.email
        });
    };

    sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'smtp_server', templateId,
            variables
        ).then(() => {
            this.setState({...this.state, response: 'Спасибо, ваше сообщение отправлено !', variant: 'success'})
        })
            .catch(() => this.setState({...this.state, response: 'Ошибка отправки !', variant: 'error'}))
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.main}>
                <div className="form_text">
                    Если Вы считаете материал, на который были перенаправлены, неприемлемым по этическим или иным
                    соображениям, информацию не правдивой или просто бесполезной, пожалуйста дайте нам знать, и мы
                    удалим ссылку на данный материал. Для этого просто заполните форму и нажмите отправить.
                </div>
                <form onSubmit={this.submitHandler}
                      className={classes.container}
                      autoComplete="on"
                >

                    <h4>Свяжитесь с нами</h4>
                    <TextField
                        label="Ваше ФИО"
                        name="name"
                        id="name"
                        onChange={this.changeHandler}
                        defaultValue={this.state.name}
                        className={classes.textField}
                        required
                        autoFocus
                    />

                    <TextField
                        label="Ваш email"
                        name="email"
                        id="email"
                        type="email"
                        onChange={this.changeHandler}
                        defaultValue={this.state.email}
                        className={classes.textField}
                        margin="normal"
                        required
                    />

                    <TextField
                        label="Ссылка на материал (URL)"
                        name="link"
                        id="link"
                        onChange={this.changeHandler}
                        defaultValue={this.state.email}
                        className={classes.textField}
                        margin="normal"
                        required
                    />


                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="reason" className={classes.label}>Выберите причину</InputLabel>
                        <Select
                            className="form_select"
                            value={this.state.reason}
                            onChange={this.changeHandler}
                            inputProps={{
                                name: 'reason',
                                id: 'reason',
                            }}
                        >
                            {reasons.map((reason, ndx) => <MenuItem key={ndx} value={reason}>{reason}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <TextareaAutosize
                        aria-label="minimum height"
                        name="message"
                        rows={3}
                        placeholder="Ваше сообщение"
                        onChange={this.changeHandler}
                        className={classes.textArea}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                    >
                        Отправить
                    </Button>
                </form>
                {this.state.response && <Notification message={this.state.response} variant={this.state.variant}/>}
            </Paper>
        )
    }
}

export default withStyles(styles)(ContactUs);
