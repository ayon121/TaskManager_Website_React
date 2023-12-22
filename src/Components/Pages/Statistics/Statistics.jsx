import { useContext, useState } from "react";
import useTodo from "../../Hooks/useTodo";
import { AuthContext } from "../../../Providers/Authproviders";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [todo ]  = useTodo()
    const [tasks, setTasks] = useState([])
    const { user } = useContext(AuthContext)
    axiosPublic.get(`/tasks/${user?.email}`)
        .then(res => {
            setTasks(res.data);
        })

       
        const usertasks = tasks?.length
        const usertodo = todo?.length
        
    
        const data = [
            { name: 'Total Tasks', value: usertasks },
            { name: 'Total Todo', value: usertodo }
        ];
    
    
        const COLORS = ["#FF444A", "#82ca9d"];
        const RADIAN = Math.PI / 180;
    
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
            }
    return (
        <div className='mb-24'>
            <div style={{ width: '100%', height: '80%' }}>
                <ResponsiveContainer width="100%" height={600}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="30%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={160}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-lg font-bold'>Your Task</h1>
                        <div className='h-3 pt-1 w-44 bg-[#00C49F]'></div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-lg font-bold' >Total To do</h1>
                        <div className='h-3 pt-1 w-44 bg-[#FF444A]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;