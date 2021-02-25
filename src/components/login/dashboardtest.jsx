import React, { Component } from 'react';
import '../../dashboard.scss'
import background from '../../static/dashboardbackground.jpg'
import {QuizData} from './QuizData';
export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
                userAnswer:null,    //current users answer
                currentIndex:0,  //current questions index
                options: [],       //the four options
                quizEnd: false, //True if it's the last question
                score: 0,      //the Score
                disabled: true,
                resofqz:'',
                qst:''
            }
        
      }
    
    //Component that holds the current quiz
    loadQuiz = () => {
        const {currentIndex} = this.state //get the current index
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options : QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer          
            }
        }
        )
    }

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        //Check for correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }
    }

     //Load the quiz once the component mounts
     componentDidMount(){
        this.loadQuiz();
    }

    //Update the component
    componentDidUpdate(prevProps, prevState){
        const{currentIndex} = this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer          
                }
            });

        }
    }

    //Check the answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled:false
        })
    }

    //Responds to the click of the finish button
    finishHandler =() => {
        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd:true
            })
        }

    }

    render() {
        const {question, options, currentIndex, userAnswer, quizEnd} = this.state //get the current state       
        if(quizEnd) {
            this.state.resofqz=
                <div className="finalScore">
                    <h1>Quiz Over. Final score is {this.state.score} points</h1>
                </div>
          
        }else{
            this.state.qst =   <div className="QuestionBox">
            <div>
              <h5 className="questionclass">{question}</h5>
               <span className="questioncount">{`Question ${currentIndex+1} of ${QuizData.length}`}</span>
               {options.map(option => (  //for each option, new paragraph
                   <p key={option.id} 
                   className={`options ${userAnswer === option ? "selected" : null}`}
                   onClick= {() => this.checkAnswer(option)}>
                       {option}
                   </p>
               ))}
               {currentIndex < QuizData.length -1 &&  
               // Next button only displays if the above is true
               <button 
                   className="nextquestionbtnclass" 
                   disabled = {this.state.disabled}
                   onClick = {this.nextQuestionHander}
                >Next Question</button>
                
               }
                {currentIndex === QuizData.length -1 &&
                   <button
                   className="ui inverted button"
                   disabled = {this.state.disabled}
                   onClick = {this.finishHandler}
                   >Finish</button>
                }
           </div>
   
       

 </div>
            
        }
             
      return (
    
     <div className="dashboard">
         <div class="container">
             <img className="imgback" src={background} width="100%" height="" />    
            {this.state.quizEnd ?
            this.state.resofqz
            :this.state.qst
            }
              </div>
             </div>
        
       
      
     
    
    

     
       
      
      );
    }
  }