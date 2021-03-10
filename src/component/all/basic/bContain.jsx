import React from "react";


class bContain extends React.Component {
    render() {
        return (
            <div>
            <div className="container">
                <div className="row" >


                    <div className="col- vl  ">
                        <label>[Table name]</label>

                    </div>
                    <div className="col-7 vl ">
                        Content
                    </div>
                    <div className="col ">
                        Config_form
                    </div>
                </div>
            </div>
            </div>
        );
    }

}

export default bContain;