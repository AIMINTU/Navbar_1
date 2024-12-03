import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Rechartss = () => {
    const students = [
        { id: 1, name: "Alice", marks: 85, result: "Pass" },
        { id: 2, name: "Bob", marks: 72, result: "Pass" },
        { id: 3, name: "Charlie", marks: 40, result: "Fail" },
        { id: 4, name: "David", marks: 91, result: "Pass" },
        { id: 5, name: "Eva", marks: 60, result: "Pass" },
        { id: 6, name: "Frank", marks: 35, result: "Fail" },
        { id: 7, name: "Grace", marks: 78, result: "Pass" },
        { id: 8, name: "Helen", marks: 92, result: "Pass" },
        { id: 9, name: "Ivy", marks: 56, result: "Pass" },
        { id: 10, name: "Jack", marks: 45, result: "Fail" }
      ];
      
    return (
        <LineChart width={800} height={400} data={students}>
            <Line type="monotone" dataKey="marks" stroke="#8884d8"></Line>
            <Line type="monotone" dataKey="id" stroke="#8884d8"></Line>
            <Line type="monotone" dataKey="result" stroke="#8884d8"></Line>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    
    );
};

export default Rechartss;