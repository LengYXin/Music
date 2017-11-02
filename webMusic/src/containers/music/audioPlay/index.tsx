import * as React from 'react'
import Help from "../../../utils/help"
import './style.css'

import Audio from "./audio"
import CurrentTime from "./currentTime"
import DurationTime from "./durationTime"
import Progress from "./progress"

export class AudioPlay extends React.Component<any, any> {
    render() {
        console.log("AudioPlay", this);
        return (
            <div className="play-progress">
                {/* <Audio /> */}
                <CurrentTime />
                <Progress  />
                <DurationTime />
            </div>
        );
    }
}
