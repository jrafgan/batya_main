import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: 300,
        margin: 'auto',
        border: '1px solid',
        borderRadius: 5,
        background: '#fff'
    },
    textField: {
        marginLeft: 8,
        marginRight: 8,
        width: 280,
    },
    textArea: {
        marginLeft: 8,
        marginRight: 8,
        minWidth: 280,

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
    }
});

class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    };

    submitHandler = e => {
        e.preventDefault();
        const templateId = 'template_SqQFU8Lf';

        this.sendFeedback(templateId, {
            message_html: this.state.message,
            from_name: this.state.name,
            reply_to: this.state.email
        })
    };

    sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'smtp_server', templateId,
            variables
        ).then(res => {
            console.log(res)
        })
            .catch(err => console.error('Error:', err))
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
                <form onSubmit={this.submitHandler}
                      className={classes.container}
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
                    <TextareaAutosize
                        aria-label="minimum height"
                        name="message"
                        rows={3}
                        placeholder="Ваше сообщение"
                        onChange={this.changeHandler}
                        className={classes.textArea}
                        required
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
            </Paper>
        )
    }
}

export default withStyles(styles)(ContactUs);
