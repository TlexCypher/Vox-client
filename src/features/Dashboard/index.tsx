import { useGetHealthcheckQuery } from "../../store/api";

interface DashboardProps { }

const Dashboard = ({ }: DashboardProps) => {
    const { data, isSuccess, isError, isLoading } = useGetHealthcheckQuery()
    console.log(data, isSuccess, isError, isLoading)
    return (
        <div> Hello </div>
    )
};

export default Dashboard;
