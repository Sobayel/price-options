import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, name: 'Alice', chemistry: 45, math: 75, physics: 85 },
        { id: 2, name: 'Bob', chemistry: 75, math: 58, physics: 78 },
        { id: 3, name: 'Charlie', chemistry: 72, math: 90, physics: 92 },
        { id: 4, name: 'David', chemistry: 85, math: 55, physics: 65 },
        { id: 5, name: 'Emma', chemistry: 87, math: 50, physics: 88 },
        { id: 6, name: 'Frank', chemistry: 60, math: 77, physics: 70 },
        { id: 7, name: 'Grace', chemistry: 85, math: 90, physics: 95 },
        { id: 8, name: 'Hannah', chemistry: 91, math: 80, physics: 81 },
        { id: 9, name: 'Isaac', chemistry: 95, math: 70, physics: 75 },
        { id: 10, name: 'Jessica', chemistry: 80, math: 70, physics: 90 }
      ];      


    return (
        <div>
            <LChart width={800} height={500} data={studentData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line className={'physics'} stroke='yellow'></Line>
                <Line className={'chemistry'} stroke='sky'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;