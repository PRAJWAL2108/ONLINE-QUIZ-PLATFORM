import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 35) {
            remark = 'Your a Novice Player !! Some more practice and you will be on route to a Competent player.'
        } else if (userScore >35 && userScore <= 55) {
            remark = 'Your a Competent Player !! Some more practice and you will be on route to a Proficient player.'
        } else if (userScore >55 && userScore <= 75) {
            remark = 'Your a Proficient Player !! Some more practice and you will be on route to an Expert player.'
        } else if (userScore >75 && userScore <= 85) {
            remark = 'Your an Expert Player !! Some more practice and you will be on route to a Master player.'
        } else {
            remark = 'Your a Master Player !! Well done.'
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Quiz has ended</h1>
                    <div className="container stats">
                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Number of Attempted questions: </span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right">{this.state.wrongAnswers}</span><br />

                        <span className="stat left">Hints Used: </span>
                        <span className="right">{this.state.hintsUsed}</span><br />

                        <span className="stat left">50-50 Used: </span>
                        <span className="right">{this.state.fiftyFiftyUsed}</span>
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/play/instructions">Play Again</Link>
                            </li>
                            <li>
                                <Link to ="/quit">Quit</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/play/instructions">Take a Quiz</Link>
                        </li>
                        <li>
                            <Link to ="/quit">Quit</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="quiz-summary">
                    {stats}
                </div>
            </Fragment>
        );
    }
}

export default QuizSummary;