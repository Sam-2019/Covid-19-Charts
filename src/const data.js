const { historyDates, continent } = this.state;
    {
      /* console.log(data[0].cases);
    console.log(data[0].deaths);
console.log(data[0].recovered); */
    }

    let chartData = [];

    const cases = data[0].cases;
    for (let key in cases) {
      chartData.push({
        date: key,
        case: cases[key],
      });
    }

    var dataCase = [];
    for (let key in cases) {
      dataCase.push(cases[key]);
    }

    var date = [];
    for (let key in cases) {
      date.push(key);
    }

    var newData = [];
    var numbers2 = [];
    var preValue;
    dataCase.map(myFunction);

    function myFunction(value0) {
      if (preValue) {
        numbers2.push((value0 - preValue) / preValue);
      }
      preValue = value0;
    }

    dataCase.shift();

    for (let key in dataCase) {
      newData.push({
        date: date[key],
        yoo: dataCase[key],
        y002: numbers2[key],
      });
    }

    console.log(newData);

    <h5 className="cardtitle">{this.props.data[0].deaths}</h5>
       
<hr />
<p className="card-text mt-1">
Today: {this.props.data[0].todayDeaths}{" "}
  <span className="output">
    <span className="pChange">5%</span>
    <span>
      <i className="fas fa-caret-down"></i>
    </span>
  </span>
</p>

const ArrayToObject1 = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
      return {
          ...obj,
        [item[key]]: item,
     }
  }, initialValue)
};

const ArrayToObject = (array, key) => 
 array.reduce((obj, item) => 
 ((obj[[item[key]]] = item), obj), {})

 const output = ArrayToObject(countries, "country");

 const { currentCountries } = this.state;
const cases  = this.props.cases;
const deaths  = this.props.deaths;
const recovered  = this.props.recovered;

cases.sort(function (a, b) {
  return b.cases - a.cases;
});

deaths.sort(function (a, b) {
  return b.deaths - a.deaths;
});

recovered.sort(function (a, b) {
  return b.recovered - a.recovered;
});

var dame = 12
if (dame > 0){
  return dame

} else {
  return dame * -1

}

var dame = 12
if (dame > 0){
  return dame
} else {
  return dame * -1
}

const x = (x, y) => x * y;

var x = function(x, y) {
  return x * y;
}


function myFunction() {
  if (n > 0){
    return n
  } else {
    return n * -1
  }
}


const rate = newData[28].y.toFixed(2);

let rateRewrite;
if (rate > 0) {
  rateRewrite = rate;
} else rateRewrite = rate * -1;


{rate > 0 ? (
    <span className="green">
      <span>
        <i className="fas fa-caret-up"></i>
      </span>{" "}
      {rateRewrite}%
    </span>
  ) : (
    <span className="red">
      <span>
        <i className="fas fa-caret-down"></i>
      </span>{" "}
      {rateRewrite}%
    </span>
  )}