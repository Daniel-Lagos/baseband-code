import React from "react";
import {Bar} from 'react-chartjs-2';

const BarChart = () => {
    return <div>
        <Bar
            data={{
                labels: ['1', '0', '1', '0', '1', '0'],
                datasets: [
                    {
                        label : 'prueba',

                        data: [1,1,1,-1,1,-1,-1],

                        backgroundColor: [
                            'rgba(224, 251, 252,1)',
                            'rgba(224, 251, 252,1)',
                            'rgba(224, 251, 252,1)',
                            'rgba(224, 251, 252,1)',
                            'rgba(224, 251, 252,1)',
                            'rgba(224, 251, 252,1)',

                        ],
                        borderColor: [
                            'rgba(89, 98, 117,1.0)',
                            'rgba(89, 98, 117,1.0)',
                            'rgba(89, 98, 117,1.0)',
                            'rgba(89, 98, 117,1.0)',
                            'rgba(89, 98, 117,1.0)',
                            'rgba(89, 98, 117,1.0)',
                            'rgba(89, 98, 117,1.0)',
                        ],
                        borderWidth: 2,

                    },
                ],
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
            }}

        />
    </div>
}

export default BarChart;