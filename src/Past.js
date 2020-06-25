import React from "react";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
class Past extends React.Component {
  state = {
    pastData: [],
    labels: [],
    data1: []
  }

  componentDidMount() {
    axios.get(`https://hn.algolia.com/api/v1/search?query=past`)
      .then(res => {
        const pastData = res.data.hits;
        const labels = [];
        const data1 = [];
        for(let i of pastData){
          labels.push(i.points) 
          data1.push(i.num_comments)
        }
        this.setState({pastData});
        this.setState({labels})
        this.setState({data1})
       // window.alert("Yooo"+ JSON.stringify(newData))
      })
  }

  render() { 
   var data = {
      columns: [
        {
          label: 'comments',
          field: 'num_comments',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Vote Count',
          field: 'points',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Title',
          field: 'title',
          sort: 'asc',
          width: 150
        }
        
      ],
      rows: this.state.pastData
    };
    var chartData = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.state.data1
        }
      ]
    }
    return (
      <div>
    <MDBDataTable
      id="customers"
      striped
      small
      data={data}
    />
      <Line
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Commet Rainfall per Vote',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
  );
}
}

export default Past;