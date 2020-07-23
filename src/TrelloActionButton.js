import React from "react";
import Icon from "@material-ui/icons"


class TrelloActionButton extends React.Component {
    renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
        <div 
        style={{
            ...styles.openForButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextBackground,
            backgroundColor: buttonTextBackground
            }}
            >
          <Icon>add</Icon>
          <p>{buttonText}</p>
        </div>
    );
};
    
    state = {
        formOpen: true
    }

    renderForm = () => {
        return <p>Hello</p>
    };
    
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        heighth: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default TrelloActionButton;