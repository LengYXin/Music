import * as React from 'react'
import { MusicPlayComponent } from "../../music"
export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        return (
            <div className="root-footer" >
                <MusicPlayComponent />
            </div>
        );
    }
}