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
