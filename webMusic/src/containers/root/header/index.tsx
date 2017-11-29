import * as React from 'react'
export default class extends React.Component<any, any>{
    componentDidMount() {
        // var isDialogTitle = false;
        // let header = this.refs.header as HTMLDivElement;
        // header.addEventListener('mousedown', function (e) {
        //     // if(e.target.className.indexOf('dialog-title')!=-1){
        //     isDialogTitle = true;
        //     // }
        // });
        // header.addEventListener('mousemove', function (e) {
        //     if (isDialogTitle) {//只有点击Dialog Title的时候才能拖动
        //         console.log(e.clientX, e.clientY);
        //     }
        // });
        // header.addEventListener('mouseup', function () {
        //     isDialogTitle = false;
        // });
    }
    render() {
        return (
            <div className="root-header-body" ref="header">
                <div className="root-header-logo"></div>
                <div className="root-header-btns"></div>
                <div className="root-header-search"></div>
                <div className="root-header-user"></div>
            </div>
        );
    }
}