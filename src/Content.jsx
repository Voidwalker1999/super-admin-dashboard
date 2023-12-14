import React from 'react';
import { BsPeopleFill, BsFillBellFill, BsBuilding, BsDatabase } from 'react-icons/bs';
import { ImManWoman } from "react-icons/im";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    Label,
} from 'recharts';

function Content() {
    const data = [
        {
            name: 'Day 1',
            traffic: Math.floor(Math.random() * 101),
        },
        {
            name: 'Day 2',
            traffic: Math.floor(Math.random() * 101),
        },
        {
            name: 'Day 3',
            traffic: Math.floor(Math.random() * 101),
        },
        {
            name: 'Day 4',
            traffic: Math.floor(Math.random() * 101),
        },
        {
            name: 'Day 5',
            traffic: Math.floor(Math.random() * 101),
        },
        {
            name: 'Day 6',
            traffic: Math.floor(Math.random() * 101),
        },
        {
            name: 'Day 7',
            traffic: Math.floor(Math.random() * 101),
        },
    ];

    const getPerformanceStatus = (performance) => {
        if (performance >= 60) {
            return 'Best Performance';
        } else if (performance >= 40) {
            return 'Neutral';
        } else {
            return 'Critical';
        }
    };


    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>NUMBER OF SCHOOLS</h3>
                        <BsBuilding className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>MASTER ADMINS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>24</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>NUMBER OF USERS</h3>
                        <ImManWoman className='card_icon' />
                    </div>
                    <h1>600</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>16</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>DATABASE</h3>
                        <BsDatabase className='card_icon' />
                    </div>
                    <h1>1</h1>
                    <button id="database-button" onClick={() => window.location.href = '/database'}>Go to Database</button>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='traffic' fill='#8884d8' />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type='monotone' dataKey='performance' stroke='#8884d8' activeDot={{ r: 8 }} />

                        <Label
                            value={({ value }) => getPerformanceStatus(value)}
                            position='top'
                            style={{ fill: '#8884d8' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Content;
