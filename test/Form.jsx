import React from "react";

class Form extends React.PureComponent{
    constructor(props){
        super(props);
        this.state= {
            option1 : React.createRef(),
            option2 : React.createRef(),
            option3 : React.createRef(),

        };
    }

    handleSubmit = (e) => {
        //fetch returns a promise
        //first then is used to extract the json part of the response object
        //the second then is used to output the json result
        //req header is additional information about the request
        //req body is the data youi want to send
        e.preventDefault();
        console.log(this.state.option1.current.value);
        console.log(this.state.option2.current.value);
        console.log(this.state.option3.current.value);
        //get fetch
        /*
        fetch("/otsi")
        .then(response => {
            console.log(response);
        })
        .then(item => {
            console.log(item);
        })
        .catch(err => {
            console.log(err);
        });
        //post fetch
        fetch("/lisa", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state),
         })
         .then(response => {
             console.log(response);
         })
         .then(item => {
             console.log(item);
         })
         .catch(err => {
             console.log(err);
         });*/
    }

    render(){
        return(
            <div className="form-body">
                <form action="" onSubmit={this.handleSubmit.bind(this)} className="box" >
                    <input type="text" name="option1" placeholder="option1" ref={this.state.option1} />
                    <input type="text" name="option2" placeholder="option2" ref={this.state.option2} />
                    <input type="text" name="option3" placeholder="option3" ref={this.state.option3} />
                    <input type="submit" name="submit-btn" value="Submit"/>
                </form>
            </div>
        );

        
    }
}

export default Form;