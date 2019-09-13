import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";

const styles = () => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: 300,
        margin: '50px auto',
        border: '1px solid',
        borderRadius: 5
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
        margin: '20px auto'
    }
});

class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    };

    componentDidUpdate(prevProps) {
        return prevProps.message !== this.props.message;
    }

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
            <Fragment>
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
                    {this.state.mailSent &&
                    <div>Thank you for contcting us.</div>}
                    }
                </form>
            </Fragment>
        )
    }
}

export default withStyles(styles)(ContactUs);
