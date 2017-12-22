import * as React from 'react'
import './style.css'
import CurrentTime from "./currentTime"
import DurationTime from "./durationTime"
import Progress from "./progress"
/**
 * 歌曲播放进度
 */
export class AudioPlay extends React.Component<any, any> {
    render() {
        // console.log("AudioPlay", this);
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
