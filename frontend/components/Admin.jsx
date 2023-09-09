import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import * as d3 from 'd3';

const useStyles = makeStyles((theme) => ({
  pieChart: {
    width: 500,
    height: 500,
    margin: '0 auto',
  },
}));

const Admin = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchUsers();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    if (tasks.length > 0 && users.length > 0) {
      renderPieChart();
    }
  }, [tasks, users]);

  const renderPieChart = () => {
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select('#pie-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const data = [
      { label: 'Tasks', value: tasks.length },
      { label: 'Users', value: users.length },
    ];

    const colorScale = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.label))
      .range(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.value);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const arcs = svg.selectAll('arc').data(pie(data)).enter().append('g');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => colorScale(d.data.label));

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d) => `${d.data.label}: ${d.data.value}`);
  };

  return (
    <div>
      {/* The visualization will be rendered here */}
      <div id="pie-chart" className={classes.pieChart}></div>
    </div>
  );
};

export default Admin;
