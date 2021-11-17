import React, {useState} from "react";




const StatisticLine = ({text, statistic}) => {

    return(
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>{text}:</td>
                    <td>{statistic}</td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

const Statistics = ({good,neutral,bad}) => {

    const total = good + neutral + bad
    const average = (good-bad)/total
    const percentage = good/total *100

    if(total >0){
    return(
        <div>
            <h2><b>statistics</b></h2>
          <br/>
          <StatisticLine text={'good'} statistic={good}/>
            <StatisticLine text={'neutral'} statistic={neutral}/>
            <StatisticLine text={'bad'} statistic={bad}/>
            <StatisticLine text={'total'} statistic={total}/>
            <StatisticLine text={'average'} statistic={average}/>
            <StatisticLine text={'percentage'} statistic={percentage}/>
        </div>
    )}else {
        return(
            <div>
                <h5>No feedback given</h5>
            </div>
        )
    }

}

const Button =({text, handler}) => (<button onClick={handler}>{text}</button>)
const App =() => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementGood =() => setGood(good +1)
    const incrementNeutral = () => setNeutral(neutral +1)
    const incrementBad = () => setBad(bad +1)


    return(
      <div>
        <h1><b>give feedback</b></h1>
          <br/>
          <Button text={'good'} handler={incrementGood}/>
          <Button text={'neutral'} handler={incrementNeutral}/>
          <Button text={'bad'} handler={incrementBad}/>
          <br/>
          <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}


export default App;
