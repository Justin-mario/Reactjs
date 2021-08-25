
import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import Button from './Button';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        const value = event.target.value;

        switch (value) {
            case '=': {
                if (this.state.question!=='')
                {
                    var ans='';
                      try
                        {
                            ans = eval(this.state.question);
                        }
                        catch(err)
                        {
                            this.setState({answer: "Math Error"});
                        }
                        if (ans===undefined)
                            this.setState({answer: "Math Error"});
           
                        
                        else
                            this.setState({ answer: ans , question: ''});
                        break;
                    }
                    break;
                }

            case 'Clear': {
 
                        // if it's the Clears sign, just clean our 
                        // question and answer in the state
                        this.setState({ question: '', answer: '' });
                        break;
                      }
                   
                      case 'Delete': {
                        var str = this.state.question;
                          str = str.substr(0,str.length-1);
                          this.setState({question: str});
                          break;
                      }
                   
                    default: {
                   
                        // for every other command, update the answer in the state
                        this.setState({ question: this.state.question += value})
                        break;
                      }
                    }
              }
            
        
    
    render() {
    // const Calculator = (props) =>{
        return (
        <div className="frame">
            <CalculatorTitle value="Chigozie Calculator"/>  
        
        <div className="mainCalc">
    <OutputScreen value={this.handleClick}/>
    <div className="button-row">
      <Button handleClick = {this.handleClick} label={'Clear'} />
      <Button handleClick = {this.handleClick} label={'Delete'} />
      <Button handleClick = {this.handleClick} label={'.'} />
      <Button handleClick = {this.handleClick} label={'/'} />
    </div>
    <div className="button-row">
      <Button  label={'7'} handleClick = {this.handleClick}/>
      <Button label={'8'} handleClick = {this.handleClick}/>
      <Button label={'9'} handleClick = {this.handleClick}/>
      <Button label={'*'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {this.handleClick}/>
      <Button label={'5'} handleClick = {this.handleClick}/>
      <Button label={'6'} handleClick = {this.handleClick}/>
      <Button label={'-'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {this.handleClick}/>
      <Button label={'2'} handleClick = {this.handleClick}/>
      <Button label={'3'} handleClick = {this.handleClick}/>
      <Button label={'+'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {this.handleClick}/>
      <Button label={'='} handleClick = {this.handleClick}/>
    </div>
    </div>
            </div>
        )
    }
}


export default Calculator;