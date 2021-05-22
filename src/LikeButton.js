import {Button} from "@vkontakte/vkui";
import {Icon28Like} from "@vkontakte/icons";
import React from "react";

export class LikeButton extends React.Component {
    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });


    };

    render() {
        return (
            <Button size="s" mode="destructive" before={<Icon28Like fill="var(--white)"/>}>Понравилось</Button>
        );
    }
}