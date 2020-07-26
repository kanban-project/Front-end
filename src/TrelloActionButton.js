import React from "react";

import TextArea from 'react-textarea-autosize';

import Card from "@material-ui/core/Card";


class TrelloActionButton extends React.Component {
    renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
        <div
        onClick={this.openForm}
        style={{
            ...styles.openForButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextBackground,
            backgroundColor: buttonTextBackground
            }}
            >
          <p>{buttonText}</p>
        </div>
    );
};
    
    state = {
        formOpen: true
    }

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list 
        ? "ENter list title..." 
        : "Enter a title for this card...";

        const buttonTitle = list ? "Add list" : "Add card";
        
        return <div>
            <Card>
              <TextArea 
                placeholder={placeholder} autoFocus/>
            </Card>
        </div>
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