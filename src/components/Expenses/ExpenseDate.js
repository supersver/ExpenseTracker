import "./ExpenseDate.css";

function ExpenseDate(props){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date(props.date);
    let month = months[d.getMonth()];
  
    const day = props.date.getDate('en-US', { day: "2-digit" });
    const year = props.date.getFullYear();  

    
return (
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
  </div>
);
}
export default ExpenseDate;