import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'


import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const Statistics = () => {
    const data = useLoaderData().data;
    console.log(data);
    return (
        <div>
            <h1 className='text-center md:text-2xl text-xl text-red-400 font-bold my-4 underline'>Statistics Reports</h1>
            <LineChart
                
                width={350}
                height={300}
                className='LineChart mx-auto my-16 md:w-64'
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />

            </LineChart>
       </div>
    );
};

export default Statistics;